import React from 'react'
import Navbar from '../../TopBar/TopBar'
import CreateProduct from './CreateProduct'
import Footer from '../../../Home/Footer'


const createAndDelete = () => {
    return (
        <div>
            <Navbar />
            <CreateProduct />

            <Footer />
        </div>
    )
}

export default createAndDelete;