import React from 'react'
import Cardquiz from '../Cardquiz/Cardquiz'
import NavbarNew2 from '../NavBarNew2/NavbarNew2'
import classes from './WaitingRoom.module.css'
const WaitingRoom = () => {
  return (
    <>
      <div>
        <NavbarNew2 />
        <Cardquiz />
      </div>
    </>
  )
}

export default WaitingRoom