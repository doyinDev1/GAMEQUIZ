import React from 'react'
import classes from './NavbarNew2.module.css'
import Steamfest from "../../assets/images/steamlogo.png"
const NavbarNew2 = () => {
  return (
    <div className={classes.Nav}>
      <div className={classes.Top}>
        <div className={classes.Left}>
<img
src={Steamfest}
alt='steamfest'
/>
        </div>
        <div className={classes.Right}>
{/* <h1>sapa</h1> */}
        </div>
      </div>
    </div>
  )
}

export default NavbarNew2