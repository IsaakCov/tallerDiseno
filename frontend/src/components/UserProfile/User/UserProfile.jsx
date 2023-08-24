import React from 'react'
import { useParams } from 'react-router-dom'

import UserSidebar from '../Pages/UserSidebar'
import AccountSettings from '../Pages/AccountSettings'
import Banner from '../Banner/Banner2'
import './UserProfile.css'
import Navbar from '../../Home/Navbar'
import Footer from '../../Home/Footer'
import SocialMediaButtons from '../../socialmediabuttons/SocialMediaButtons'
import YourOrders from '../Pages/YourOrders'







const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
  return (
    <div className='user'>
      <Navbar />
      <Banner />
        

         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings/>}
              
              {activepage === 'yourorders' && <YourOrders/>}
              {/* {activepage === 'address' && <UserAddress/>} */}
              
            </div>
         </div>
         <SocialMediaButtons />

         <Footer />

         
        
        </div>
  )
}

export default UserProfile