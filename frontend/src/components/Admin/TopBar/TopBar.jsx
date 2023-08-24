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
            <img src={User} alt="" className="topAvatarAdmin" />
        </div>
        </div>

    </div>
)
}

export default TopBar