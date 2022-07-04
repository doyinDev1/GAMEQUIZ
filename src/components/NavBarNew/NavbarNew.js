import React from 'react'
import classes from './NavbarNew.module.css'
import Steamfest from "../../assets/images/logo.png"
const NavbarNew = () => {
  return (
    <div className={classes.Nav}>
      <div>
        <div className={classes.Left}>
<img
src={Steamfest}
alt='steamfest'
/>
        </div>
        <div className={classes.Right}>

        </div>
      </div>


    </div>
  )
}

export default NavbarNew