import React from 'react'
import TopBar from '../../TopBar/TopBar'
import SideBar from '../../SideBar/SideBar'
import User from './User'
import './edituser.css'




const EditUser = () => {
  return (
    <>
    <TopBar/>
    <div className="container">
        <SideBar/>
        <User/>
    </div> 
        
    </> 
  )
}

export default EditUser