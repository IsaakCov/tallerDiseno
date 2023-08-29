import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";
import "./Navbar.css";
import CartElements from "../CartContent/CartElements";
import isotipo from "../../img/isotipo.jpg";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div id='menu-marketplace' className="barra-market navbar navbar-expand-lg navbar-light">
      <nav className="navbar-market container">
        <Link to={"/"} className="navbar-brand fs-4">
          <img src={isotipo} alt="Logotipo" width="70%" />
        </Link>

        {/* Toggle btn */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* SideBar */}
        <div
          className="sidebar offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          {/* Sidebar header */}
          <div className="offcanvas-header border-bottom text-black">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Marketplace
            </h5>
            <button
              type="button"
              className="btn-close shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          {/* Sidebar Body */}
          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
            <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/contact">
                  Contacto
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/marketplace">
                  Marketplace
                </Link>
              </li>
            </ul>

            {/* carrito compra */}
            <div
              className={"d-flex justify-content-center nav-container-market"}
            >
              <button
                className="btn btn-outline-dark"
                type="submit"
                onClick={() => setOpenModal(true)}
              >
                <i className="bi-cart-fill me-1"></i>
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cart.length > 0 ? <TotalItems /> : null}
                </span>
              </button>
              <CartElements
                open={openModal}
                onClose={() => setOpenModal(false)}
              />
            </div>


          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
