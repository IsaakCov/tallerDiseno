import React from 'react'
import Navbar from '../../TopBar/TopBar'
import CreateProduct from './CreateProduct'
import Footer from '../../../Home/Footer'
import SideBar from '../../SideBar/SideBar'
import TopBar from '../../../Admin/TopBar/TopBar'

const createAndDelete = () => {
    return (
        <>
            <TopBar />
            <div className="container dashboard">

                {/* <Navbar /> */}
                <SideBar />
                <CreateProduct />
            </div>
        </>
    )
}

export default createAndDelete;

{/* <div className="container dashboard">
    <SideBar />
    <UserList />
</div>  */}