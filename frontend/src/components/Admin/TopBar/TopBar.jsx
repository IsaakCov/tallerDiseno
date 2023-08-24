import { useState } from "react";
import { Link } from "react-router-dom";
import isotipo from "../img/isotipo.jpg";
import Login from "../../formularioinicioyregistro/Login";
import { useRef } from "react";
import BotonAdmin from "../../Home/BotonAdmin";
import BotonLogOut from "../../Home/BotonLogOut";


const Navbar = () => {
const [openLogin, setOpenLogin] = useState(false);

return (
    <div id="menu">
    <nav id="nav-principal" className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Logo */}
        <Link className="navbar-brand fs-4" to="/">
            <img src={isotipo} alt="Logotipo" width="60%" />
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
                Menú
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
                <Link className="nav-link" to="/marketplace">
                    Marketplace
                </Link>
                </li>
                
                
            </ul>
              {/* Ingresar - Registrarse */}
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                <li className="d-flex nav-item mx-2">
                <BotonAdmin/>
                <BotonLogOut/>
                
                </li>
            </div>
            </div>
        </div>
        </div>
    </nav>
    </div>
);
};

export default Navbar;