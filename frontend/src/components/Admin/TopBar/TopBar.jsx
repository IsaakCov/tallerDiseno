import React from 'react'
//import "./topbar.css"
import isotipo from '../img/isotipo.jpg'
import User from '../img/User.png'


const TopBar = () => {
return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft"><img src={isotipo} alt="Logo" /></div>
        <div className="topRight">
            <div className="topbarIconContainer">
            <i className="bi bi-bell"></i>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <i className="bi bi-globe2"></i>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <i className="bi bi-gear"></i>
            </div>
            <img src={User} alt="" className="topAvatar" />



            
        </div>
        </div>

    </div>
)
}

export default TopBar