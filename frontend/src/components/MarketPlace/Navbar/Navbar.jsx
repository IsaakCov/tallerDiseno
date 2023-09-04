/* import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext"; */
import { Link } from "react-router-dom";
/* import TotalItems from "../CartContent/TotalItems"; */
import "./Navbar.css";
/* import CartElements from "../CartContent/CartElements"; */
import CartElements from "../CartContent/CartElements";
import isotipo from "../../img/isotipo.jpg";

const Navbar = () => {
  /*  const { cart } = useContext(dataContext);
   const [openModal, setOpenModal] = useState(false); */
  return (
    <div id='menu-marketplace' className="barra-market navbar navbar-expand-lg navbar-light">
      <nav className="navbar-market container d-flex">
        <Link to={"/"} className="navbar-brand fs-4">
          <img src={isotipo} alt="Logotipo" width="70%" />
        </Link>
      </nav>

      {/* <div className="nav-container-market">
        {/* Toggle btn */}
      <div>
        <button
          class="modalBtn-market btn btn-outline-dark"
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
    </div>
  );
};

export default Navbar;
