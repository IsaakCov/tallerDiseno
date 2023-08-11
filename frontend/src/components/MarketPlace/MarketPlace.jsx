import React from 'react'
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './Context/DataContext';
import Order from "./Order/Order";
import ShippingInfo from "./Order/ShippingInfo"; 
import PaymentInfo from "./Order/PaymentInfo"; 

function MarketPlace () {
return (
    <DataProvider>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/order" element={<Order />} />
        <Route path="/shipping-info" element={<ShippingInfo />} />
        <Route path="/payment-info" element={<PaymentInfo />} />
        </Routes>
    </BrowserRouter>
    </DataProvider>
    )
}

export default MarketPlace