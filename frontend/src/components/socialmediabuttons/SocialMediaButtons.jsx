import React, { useState, useContext } from "react";
import { dataContext } from "../MarketPlace/Context/DataContext";
import "../componentsCSS/botones.css";
import CartElements from "../MarketPlace/CartContent/CartElements";
import TotalItems from "../MarketPlace/CartContent/TotalItems";

function SocialMediaButtons() {
  const { cart } = useContext(dataContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="icon-bar" id="icon-links">
      <div /* className="nav-container-market" */>
        <button
          class="button__cart"
          type="submit"
          onClick={() => setOpenModal(true)}
        >
          <i class="bi-cart-fill me-1"></i>

          <span class="badge bg-dark text-white ms-1 rounded-pill">
            {cart.length > 0 ? <TotalItems /> : null}
          </span>

        </button>
        <CartElements open={openModal} onClose={() => setOpenModal(false)} />
      </div>
      <a className="email" href="mailto:tallerdiseno.1978@gmail.com">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </a>
      <a href="https://wa.me/c/56930268586" className="whatsapp">
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.instagram.com/taller_design_chile/"
        target="_blank"
        className="instagram"
      >
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default SocialMediaButtons;
