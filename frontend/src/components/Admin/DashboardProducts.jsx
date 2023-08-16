import React from 'react'
import TopBar from './TopBar/TopBar'
import SideBar from './SideBar/SideBar'
import './dashboard.css'
import ProductList from './Pages/ProductList/ProductList'




const DashboardProducts = () => {
return (
    <>
    <TopBar/>
    <div className="container">
        <SideBar/>
        <ProductList/>
    </div> 
    </> 
)
}

export default DashboardProducts