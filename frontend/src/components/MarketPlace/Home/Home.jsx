import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import SocialMediaButtons from "../../socialmediabuttons/SocialMediaButtons";
const MarketPlace = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="product-card-container">
        <Products />
      </div>
      <SocialMediaButtons />
    </>
  );
};

export default MarketPlace;
