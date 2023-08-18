import React from 'react'
import "./topbar.css"
import isotipo from '../img/isotipo.jpg'
import User from '../img/User.png'


const TopBar = () => {
return (
    <div className="topbarAdmin">
        <div className="topbarWrapperAdmin">
        <div className="topLeftAdmin"><img src={isotipo} alt="Logo" /></div>
        <div className="topRightAdmin">
            <div className="topbarIconContainerAdmin">
            <i className="bi bi-bell"></i>
                <span className="topIconBadgeAdmin">2</span>
            </div>
            <div className="topbarIconContainerAdmin">
            <i className="bi bi-globe2"></i>
                <span className="topIconBadgeAdmin">2</span>
            </div>
            <div className="topbarIconContainer">
            <i className="bi bi-gear"></i>
            </div>
            <img src={User} alt="" className="topAvatarAdmin" />



            
        </div>
        </div>

    </div>
)
}

export default TopBar