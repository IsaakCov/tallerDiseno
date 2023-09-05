import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../componentsCSS/CompromisoySer.css";
import "../componentsCSS/botones.css";
import "../componentsCSS/hero-section.css";
import "../componentsCSS/servicios.css";
import "../componentsCSS/timeline.css";
import isotipo from "../img/isotipo.jpg";
import Login from "../formularioinicioyregistro/Login";
import { useRef } from "react";
import BotonUsuario from "./BotonUsuario";
import BotonAdmin from "./BotonAdmin";
import BotonLogOut from "./BotonLogOut";

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const compromisoSectionRef = useRef(null);
  const [userRole, setUserRole] = useState(null); // Estado para el rol del usuario

  useEffect(() => {
    // Obtiene el rol del localStorage al montar el componente
    const role = localStorage.getItem('userRole');
    setUserRole(role);
  }, []);

  const handleCompromisoClick = () => {
    if (compromisoSectionRef.current) {
      compromisoSectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="menu" className="p-3">
      <nav id="nav-principal" className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fs-4" to="/">
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
                  <a
                    className="nav-link"
                    onClick={handleCompromisoClick}
                    href="#compromiso"
                  >
                    Compromiso
                  </a>
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
                    className="button"
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

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
