import Index from './components/Home/Index'
/* import MarketPlace from './components/MarketPlace/MarketPlace' */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './components/MarketPlace/Context/DataContext';
import Home from './components/MarketPlace/Home/Home';
import Order from "./components/MarketPlace/Order/Order";
import ShippingInfo from "./components/MarketPlace/Order/ShippingInfo"; 
import PaymentInfo from "./components/MarketPlace/Order/PaymentInfo"; 
import DashboardUsers from './components/Admin/DashboardUsers';
import EditUser from './components/Admin/Pages/User/EditUser';
import DashboardProducts from './components/Admin/DashboardProducts';
import DashboardOrders from './components/Admin/DashboardOrders';

function App() {
  

  return (
    <DataProvider>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/Marketplace" element={<Home />}/>
        <Route path="/order" element={<Order />} />
        <Route path="/shipping-info" element={<ShippingInfo />}/>
        <Route path="/payment-info" element={<PaymentInfo />} />
        <Route path="/AdminDashboard/Users" element={<DashboardUsers/>}/>
        <Route path="/AdminDashboard/Products" element={<DashboardProducts/>}/>
        <Route path="/AdminDashboard/User/:userId" element={<EditUser/>}/>
        <Route path="/AdminDashBoard/Products" element={<DashboardProducts/>}/>
        <Route path="/AdminDashBoard/Orders" element={<DashboardOrders/>}/>
        
        </Routes>
    </BrowserRouter>
    </DataProvider>

  )
}

export default App
