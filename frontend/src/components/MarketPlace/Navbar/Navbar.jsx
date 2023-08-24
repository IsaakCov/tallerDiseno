import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";
import "./Navbar.css";
import CartElements from "../CartContent/CartElements";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="barra-market ">
      <nav className="navbar-market">
        <Link to={"/"}>
          <h1 className="navbar-logo">Taller Diseño</h1>
        </Link>
      </nav>

      <div className="nav-container-market">
        <button
          className="modalBtn-market btn btn-outline-dark"
          type="submit"
          onClick={() => setOpenModal(true)}
        >
          <i className="bi-cart-fill me-1"></i>

          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {cart.length > 0 ? <TotalItems /> : null}
          </span>
        </button>
        <CartElements open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
};

export default Navbar;
