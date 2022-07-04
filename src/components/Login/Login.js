import React, { useState } from 'react';
import classes from './Login.module.css';
import NavbarNew from '../NavBarNew/NavbarNew';
import Girl from '../../assets/images/image 2.png';
import AvatarCard from '../AvatarCard/AvatarCard';
import ReactModal from 'react-modal';
import Boy1 from '../../assets/images/boy1.png';
import Boy2 from '../../assets/images/boy2.png';
import Boy3 from '../../assets/images/boy3.png';
import Girl1 from '../../assets/images/girl1.png';
import Girl2 from '../../assets/images/girl2.png';
import Girl3 from '../../assets/images/girl3.png';


const Login = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectAvatar, setSelectAvatar] = useState("https://res.cloudinary.com/naijakids/image/upload/v1656554996/boy2_n7d2rg.png");
    const doClick = (e) => {
        setSelectAvatar(e.target.value)
        setModalOpen(false)
    }

    // const { status, data } = useLogin();

    return (
        <>
            {console.log(selectAvatar, "avatar")}
            <div className={classes.Login}>
                <div className={classes.Navbar}>
                    <NavbarNew />
                </div>

                <div className={classes.MainCover}>


                    <div className={classes.Main}>
                        <div className={classes.first}>
                        <img
                            src={Girl}
                            alt="girl"
                            // className={classes.first}
                        />
                        </div>
                        <div className={classes.second}>
                        <AvatarCard setModalOpen={setModalOpen} selectAvatar={selectAvatar} />
                        </div>
                        <div className={classes.third}>
                        </div>
                    </div>
                </div>
            </div>
            <ReactModal
                closeTimeoutMS={1000}
                isOpen={modalOpen}
                // isOpen={true}

                className={classes.modal}
            >
                <div className={classes.modalCard} >
                    <div className={classes.modalCardText}>
                        <h1>Choose your Avatar </h1>
                    </div>
                    <div className={classes.onediv}>

                        <div className={classes.modalCardImage}>
                            <div className={classes.CardCover} >
                                <div className={classes.imgCover}>

                                    <input
                                        type="image"
                                        src={Boy2}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656554996/boy2_n7d2rg.png"
                                        alt=""
                                        onClick={doClick}
                                    />

                                </div>
                                <p>God of Games</p>
                                <p className={classes.small}>I travel to space to study the Universe</p>
                            </div>
                            <div className={classes.CardCover}
                            // onClick={(e) => setSelectAvatar(e.currentTarget.event)}
                            >
                                <div className={classes.imgCover}>

                                    <input
                                        type="image"
                                        src={Girl1}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656555078/girl1_vns6w8.png"
                                        alt=""
                                        onClick={doClick}
                                    />
                                </div>
                                <p>Wonder Girl</p>
                                <p className={classes.small}>I am great with technology</p>

                                

                            </div>
                            <div className={classes.CardCover}>
                                <div className={classes.imgCover}>
                                    {/* <img
                                    src={Boy3}
                                    alt="" boy /> */}

                                    <input
                                        type="image"
                                        src={Boy3}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656554877/boy3_lfip7j.png"
                                        alt=""
                                        onClick={doClick}
                                    />
                                </div>
                                <p>Alucard</p>
                                <p className={classes.small}>I create robots to make life easier</p>

                                

                            </div>
                            <div className={classes.CardCover}>
                                <div className={classes.imgCover}>
                                    {/* <img
                                    src={Girl3}
                                    alt="" boy /> */}
                                    <input
                                        type="image"
                                        src={Girl3}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656555084/girl3_n04vv8.png"
                                        alt=""
                                        onClick={doClick}
                                    />
                                </div>
                                <p>Gaming Bunny</p>
                                <p className={classes.small}>I design new gadgets all day long</p>

                                
                            </div>




                        </div>
                        <div className={classes.modalCardImage}>
                            <div className={classes.CardCover}>
                                <div className={classes.imgCover}>
                                    {/* <img
                                    src={Boy2}
                                    alt="" boy /> */}
                                    <input
                                        type="image"
                                        src={Boy2}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656554996/boy2_n7d2rg.png"
                                        alt=""
                                        onClick={doClick}
                                    />
                                </div>
                                <p>Wakanda</p>
                                <p className={classes.small}>I analyze data for market trends and Insights</p>

                                
                            </div>
                            <div className={classes.CardCover}>
                                <div className={classes.imgCover}>
                                    {/* <img
                                    src={Girl2}
                                    alt="" boy /> */}
                                    <input
                                        type="image"
                                        src={Girl2}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656555092/girl2_gjqtv4.png"
                                        alt=""
                                        onClick={doClick}
                                    />
                                </div>
                                <p>Barbie</p>
                                <p className={classes.small}>I create a virtual space for people to interact</p>

                                
                            </div>
                            <div className={classes.CardCover}>
                                <div className={classes.imgCover}>
                                    {/* <img
                                    src={Boy1}
                                    alt="" boy /> */}
                                    <input
                                        type="image"
                                        src={Boy1}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656555152/boy1_aufwfc.png"
                                        alt=""
                                        onClick={doClick}
                                    />
                                </div>
                                <p>War Hero</p>
                                <p className={classes.small}>I carry out research on blockchain</p>

                                
                            </div>
                            <div className={classes.CardCover}>
                                <div className={classes.imgCover}>
                                    {/* <img
                                    src={Girl3}
                                    alt="" boy /> */}
                                    <input
                                        type="image"
                                        src={Girl3}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656555084/girl3_n04vv8.png"
                                        alt=""
                                        onClick={doClick}
                                    />
                                </div>
                                <p>Danger Girl</p>
                                <p className={classes.small}>I develop vaccines to prevent diseases</p>

                                
                            </div>




                        </div>
                        <div className={classes.modalCardImage}>
                            <div className={classes.CardCover}>
                                <div className={classes.imgCover}>
                                    {/* <img
                                    src={Boy2}
                                    alt="" boy /> */}
                                    <input
                                        type="image"
                                        src={Boy2}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656554996/boy2_n7d2rg.png"
                                        alt=""
                                        onClick={doClick}
                                    />
                                </div>
                                <p>Flash</p>
                                <p className={classes.small}>I love solving mathematical problems</p>

                                
                            </div>
                            <div className={classes.CardCover}>
                                <div className={classes.imgCover}>
                                    {/* <img
                                    src={Boy3}
                                    alt="" boy /> */}
                                    <input
                                        type="image"
                                        src={Boy3}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656554877/boy3_lfip7j.png"
                                        alt=""
                                        onClick={doClick}
                                    />
                                </div>
                                <p>Knight</p>
                                <p className={classes.small}>I perform operation on the human body</p>

                                
                            </div>
                            <div className={classes.CardCover}>
                                <div className={classes.imgCover}>
                                    {/* <img
                                    src={Girl2}
                                    alt="" boy /> */}
                                    <input
                                        type="image"
                                        src={Girl2}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656555092/girl2_gjqtv4.png"
                                        alt=""
                                        onClick={doClick}
                                    />

                                </div>
                                <p>Senamie</p>
                                <p className={classes.small}> I create models for vehicles</p>

                               
                            </div>
                            <div className={classes.CardCover}>
                                <div className={classes.imgCover}>
                                    {/* <img
                                    src={Boy1}
                                    alt="" boy /> */}
                                    <input
                                        type="image"
                                        src={Boy1}
                                        value="https://res.cloudinary.com/naijakids/image/upload/v1656555152/boy1_aufwfc.png"
                                        alt=""
                                        onClick={doClick}
                                    />
                                </div>
                                <p>Crusher</p>
                                <p className={classes.small}> I love creating tools to solve problems</p>

                                
                            </div>



                        </div>
                    </div>
                </div>
            </ReactModal>
        </>
    )
}

export default Login