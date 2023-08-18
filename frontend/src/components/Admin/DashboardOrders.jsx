import React from 'react'
import TopBar from './TopBar/TopBar'
import SideBar from './SideBar/SideBar'
import './dashboard.css'
import OrderList from './Pages/OrderList/OrderList'


const DashboardOrders = () => {
return (
    <>
    <TopBar/>
    <div className="container dashboard">
        <SideBar/>
        <OrderList/>
    </div> 
    </> 
)
}

export default DashboardOrders
