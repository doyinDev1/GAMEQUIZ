import React, { useState } from 'react'
import classes from './AvatarCard.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { updateUser } from '../../parse/contestant'
import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object().shape({
  display_name: Yup.string().required('Your Display Name is required'),
  avatar: Yup.string().required('Selecting an Avatar is required'),
  // house: Yup.string().required('Select your house'),
});

const AvatarCard = ({ setModalOpen, selectAvatar }) => {
  let navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [characterLimit] = useState(20);
  const [error, setError] = useState(false);

  const handleChange = event => {
    setInputText(event.target.value);
    setError(false)
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  });

  const handleModal = () => {
    setModalOpen(true)
  }
  const userInfo = JSON.parse(sessionStorage.getItem('gqUser'));
  // console.log(userInfo?.objectId, "PO")
  // console.log(errors)
  const onLoginFormSubmit = async (data) => {
    const myFormData = {
      display_name: data['display_name'].toLowerCase(),
      avatar: data['avatar'],
      objectId: userInfo?.objectId
    };
    // console.log(myFormData, "fomr")
    setError(false);

    try {
      const updateUserDetails = await updateUser(myFormData);
      console.log(updateUserDetails, "updateUserDetails")

      if (updateUserDetails.display_name === myFormData.display_name) {
        const userData = JSON.stringify({
          access_code: updateUserDetails.access_code,
          age_group: updateUserDetails.age_group,
          avatar: updateUserDetails.avatar,
          display_name: updateUserDetails.display_name,
          gender: updateUserDetails.gender,
          name: updateUserDetails.name,
          objectId: updateUserDetails.objectId,
          sessionToken: updateUserDetails.sessionToken,
          username: updateUserDetails.username,
          first_login: updateUserDetails.first_login,
        })
        sessionStorage.setItem("gqUser", userData)
        navigate("/waiting-room")
      }
      if (updateUserDetails.msg == "User with that display name already exists") {
        setError(true);
      }
    } catch (error) {
      console.log(error, "err")
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onLoginFormSubmit)}>

        <div className={classes.Avatar}>
          <div className={classes.AvatarTop}>
            <div className={classes.AvatarTop2}>
              <div className={classes.commentTop}>

                <div className={classes.comment}>
                  <h5>Step 1: Select your Avatar</h5>
                </div>
                <input
                  type="image"
                  src={selectAvatar}
                  value={selectAvatar}
                  alt=""
                  {...register('avatar')}

                />
                <button onClick={handleModal}>
                  Select Avatar
                </button>
              </div>
            </div>

          </div>
          <div className={classes.AvatarBottom}>

            <div className={classes.AvatarTop1}>
              <div className={classes.AvatarTop2}>
                <div className={classes.commentTop}>
                  <div className={classes.comment}>
                    <h5>Step 2: Type in your display name</h5>
                  </div>
                  <div className={classes.Input}>

                    <input
                      {...register('display_name')}
                      type="text"
                      placeholder='Type in your display name'
                      value={inputText}
                      onChange={handleChange}
                      minLength="6"
                      maxLength={20}
                    />
                    {errors.display_name && <p style={{ textAlign: "center", marginBottom: "0px", fontSize: "13px" }}>Please Enter a Display Name</p>}


                  </div>
                  <Badge className='mt-3' bg={`${inputText.length > characterLimit ? 'danger' : 'primary'}`}>{inputText.length}/{characterLimit} characters left</Badge>                  </div>

                {error ? (
                  <p style={{ textAlign: "center", color: "red" }}>A user with that display name already exists</p>
                ) : ""}
                <span>Make sure your username is 6 - 20 characters long </span>
              </div>
            </div>
          </div>
          <div className={classes.Login}>

            <button type="submit">Join Quiz</button>
          </div>
        </div>
      </Form>
    </>
  )
}

export default AvatarCard