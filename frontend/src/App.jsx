import Index from "./components/Home/Index";
/* import MarketPlace from './components/MarketPlace/MarketPlace' */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./components/MarketPlace/Context/DataContext";
import Home from "./components/MarketPlace/Home/Home";
import Order from "./components/MarketPlace/Order/Order";
import ShippingInfo from "./components/MarketPlace/Order/ShippingInfo";
import PaymentInfo from "./components/MarketPlace/Order/PaymentInfo";
import DashboardUsers from "./components/Admin/DashboardUsers";
import EditUser from "./components/Admin/Pages/User/EditUser";
import DashboardProducts from "./components/Admin/DashboardProducts";
import DashboardOrders from "./components/Admin/DashboardOrders";
import HomeProfile from "./components/UserProfile/Home/HomeProfile";
import UserProfile from "./components/UserProfile/User/UserProfile";
import "./App.css"
import ItemViews from "./components/ShopItemsView/ItemViews";
import Contact from "./components/Contact/Contact";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import CreateDeleteProduct from "./components/Admin/Pages/createProduct/index";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Marketplace" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/Marketplace/items/:Nombre" element={<ItemViews />} />
          <Route path="/order" element={<Order />} />
          <Route path="/shipping-info" element={<ShippingInfo />} />
          <Route path="/payment-info" element={<PaymentInfo />} />
          <Route path="/ordersummary" element={<OrderSummary />} />


          <Route path="/AdminDashboard/Users" element={<DashboardUsers />} />
          <Route path="/AdminDashboard/Products" element={<DashboardProducts />} />
          <Route path="/AdminDashboard/User/:userId" element={<EditUser />} />
          <Route path="/AdminDashBoard/Orders" element={<DashboardOrders />} />
          <Route path="/AdminDashBoard/crearproducto" element={<CreateDeleteProduct />} />


          <Route path="/userhome" element={<HomeProfile />} />
          <Route path='/user/:activepage' element={<UserProfile />}></Route>













        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
