import React from 'react'
import TopBar from './TopBar/TopBar'
import SideBar from './SideBar/SideBar'
import './dashboard.css'
import UserList from './Pages/UserList/UserList';


const Dashboard = () => {
return (
    <>
    <TopBar/>
    <div className="container dashboard">
        <SideBar/>
        <UserList/>
    </div> 
    </> 
)
}

export default Dashboard