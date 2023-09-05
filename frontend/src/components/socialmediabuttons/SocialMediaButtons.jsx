import React, { useState, useContext } from "react";
import { dataContext } from "../MarketPlace/Context/DataContext";
import "../componentsCSS/botones.css";
import CartElements from "../MarketPlace/CartContent/CartElements";
import TotalItems from "../MarketPlace/CartContent/TotalItems";

function SocialMediaButtons() {
  const { cart } = useContext(dataContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div
        className=" d-flex justify-content-center nav-container-market"
      >
        <button
          className="button__cart "
          type="submit"
          onClick={() => setOpenModal(true)}
        >
          <i className="bi-cart-fill"></i>
          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {cart.length > 0 ? <TotalItems /> : null}
          </span>
        </button>
        <CartElements
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      </div>

      <div className="icon-bar" id="icon-links">

        <a
          href="https://www.instagram.com/taller_design_chile/"
          target="_blank"
          className="instagram"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>

        <a className="email" href="mailto:tallerdiseno.1978@gmail.com">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
        <a href="https://wa.me/c/56930268586" className="whatsapp">
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/taller_design_chile/"
          target="_blank"
          className="instagram opacity-0"
          disabled
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default SocialMediaButtons;
