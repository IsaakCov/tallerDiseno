import React from "react";
import ShopItems from "../Shopitems/ShopItems";
import Navbar from "../MarketPlace/Navbar/Navbar";
import SocialMediaButtons from "../socialmediabuttons/SocialMediaButtons";
import Footer from "../Home/Footer";

function ItemViews() {
  return (
    <>
      <Navbar />
      <ShopItems />
      <SocialMediaButtons />
      <Footer />
    </>
  );
}

export default ItemViews;
