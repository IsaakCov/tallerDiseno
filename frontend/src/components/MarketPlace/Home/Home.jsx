import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
const MarketPlace=()=>{
    return (
        <>
        <Navbar />
        <Banner />
        <div className='product-card-container'>
            <Products />
        </div>
        </>
        
    )
}

export default MarketPlace;