import React from 'react'
import TopBar from './TopBar/TopBar'
import SideBar from './SideBar/SideBar'
//import './dashboard.css'
import '../Admin/dashboard.css'



const DashboardProducts = () => {
return (
    <>
    <TopBar/>
    <div className="container">
        <SideBar/>
    </div> 
    </> 
)
}

export default DashboardProducts