import React, { useState } from 'react'
import classes from './Hero.module.css'
import background from '../../assets/images/background2.png'
import steamfest from '../../assets/images/Group 4.png'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { doLogin } from '../../parse/contestant'
import { MdError } from 'react-icons/md'
const validationSchema = Yup.object().shape({
    access_code: Yup.string().required('Your Access Code is required'),
    // password: Yup.string().required('Employee Id is required'),
    // house: Yup.string().required('Select your house'),
});


export const Hero = () => {
    const [errorMsg , setErrorMsg] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onSubmit',
    });
    
    let navigate = useNavigate()
    
    const doChange = ()=>{
        setErrorMsg("")

    }

    const onLoginFormSubmit = async (data) => {
        const myFormData = {
            access_code: data['access_code'].toLowerCase(),
            // password: data['password'].trim(),
        };
        setErrorMsg("")
        try {
     
            const logging = await doLogin(myFormData?.access_code);
            console.log( logging , "logging")
           
     if (logging?.success === false){
// alert("sapa")
// alert(logging?.msg)
setErrorMsg(logging?.msg)
     }
    //  if (logging?.success === false) throw new Error({"error")
     if (logging?.first_login === false){
        const userData = JSON.stringify({
            access_code: logging.access_code,
            age_group: logging.age_group,
            avatar: logging.avatar,
            display_name: logging.display_name,
            gender: logging.gender,
            name: logging.name,
            objectId: logging.objectId,
            sessionToken: logging.sessionToken,
            username: logging.username,
            first_login: logging.first_login,
        })
        sessionStorage.setItem("gqUser", userData)
        // navigate("/login")
        // alert("sapa choke")
        navigate("/waiting-room")
        //navigate to waiting room

     }
     if (logging?.first_login === true){
        const userData = JSON.stringify({
            access_code: logging.access_code,
            age_group: logging.age_group,
            avatar: logging.avatar,
            display_name: logging.display_name,
            gender: logging.gender,
            name: logging.name,
            objectId: logging.objectId,
            sessionToken: logging.sessionToken,
            username: logging.username,
            first_login: logging.first_login,
        })
        sessionStorage.setItem("gqUser", userData)
        navigate("/set-avatar")

        // alert("sapa choke")
        //do update 

     }

        } catch (err) {
            console.log(err, "err caught")
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onLoginFormSubmit)}>

                <div className={classes.Hero}>
                    <div className={classes.Left}>
                        <div className={classes.LeftTop}>
                            <img src={steamfest}
                                alt="steamfest" />
                        </div>

                        <div className={classes.LeftTopMid}>
                            <h1>Steamfest 2022 Quiz</h1>
                            <h2>Great prices to be won !</h2>
                        </div>
                        <div className={classes.LeftTopBottom}>
                            <h3>Enter your Steamfest code to join <br />
                                and win exciting prices</h3>
                            <div className={classes.Input}>

                                <input type="number" placeholder='Steamfest code'
                                    {...register('access_code')}
                                    required
                                    onChange={doChange}
                                />
                                <button type='submit'>Start</button>
                                {/* {errors.username &&{errors.access_code?.message}} */}

                            </div>
                            {/* {errors?.access_code && 
                            <p>Put in your Access Code</p>} */}
                           
                            

                            
                                {errorMsg && <div className={classes.Error}>
                                <MdError/>
                                    <p>Error: {errorMsg}</p>
                                    </div> }

                       
                            {/* {errors?.access_code && <div className={classes.Error}>
                            <MdError/>
                                <p>Error: Please Type in Access Code</p>
                                </div> 
} */}
                            

                        </div>
                    </div>
                    <div className={classes.Right}>

                        <img src={background}
                            alt="background" />
                    </div>

                </div>
            </form>

        </>
    )
}
