/* import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext"; */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* import TotalItems from "../CartContent/TotalItems"; */
import "./Navbar.css";
/* import CartElements from "../CartContent/CartElements"; */
import isotipo from "../../img/isotipo.jpg";
import Login from "../../formularioinicioyregistro/Login";
import BotonUsuario from "../../Home/BotonUsuario";
import BotonAdmin from "../../Home/BotonAdmin";
import BotonLogOut from "../../Home/BotonLogOut";

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [userRole, setUserRole] = useState(null); // Estado para el rol del usuario

  useEffect(() => {
    // Obtiene el rol del localStorage al montar el componente
    const role = localStorage.getItem('userRole');
    setUserRole(role);
  }, []);

  return (
    <div id='menu-marketplace' className="barra-market navbar navbar-expand-lg navbar-light p-3">
      <nav className="navbar-market container d-flex">
        <Link to={"/"} className="navbar-brand fs-4">
          <img src={isotipo} alt="Logotipo" width="70%" />
        </Link>

        {/* Toggle btn */}
        <div>
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
        </div>

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
            {/* Ingresar - Registrarse */}
            {!userRole && (
              <>
                <button
                  className="button button__market"
                  id="form-open"
                  onClick={() => setOpenLogin(true)}
                >
                  Login
                </button>
                <Login open={openLogin} onClose={() => setOpenLogin(false)} />
              </>
            )}

            {userRole === "ADMINISTRADOR" && (
              <li className="d-flex nav-item mx-2">
                <BotonAdmin />
                <BotonLogOut />
              </li>
            )}

            {userRole === "USUARIO" && (
              <li className="d-flex nav-item mx-2">
                <BotonUsuario />
                <BotonLogOut />
              </li>
            )}

          </div>

        </div>

        {/* carrito compra */}
        {/*  <div
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
        </div> */}

      </nav>
    </div>
  );
};

export default Navbar;