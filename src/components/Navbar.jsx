import React from 'react';
import './componentsCSS/CompromisoySer.css'
import './componentsCSS/botones.css'
import './componentsCSS/hero-section.css'
import './componentsCSS/servicios.css'
import './componentsCSS/style.css'
import './componentsCSS/timeline.css'
import isotipo from './img/isotipo.jpg'
const Navbar = () => {
  return (
    <div id="menu">
      <nav id="nav-principal" className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand fs-4" href="#">
            <img src={isotipo} alt="Logotipo" width="60%" />
          </a>
          {/* Toggle btn */}
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* SideBar */}
          <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            {/* Sidebar header */}
            <div className="offcanvas-header border-bottom text-black">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            {/* Sidebar Body */}
            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1">
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="about">Nosotros</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="services">Servicios</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="contact">Contacto</a>
                </li>
              </ul>
              {/* Ingresar - Registrarse */}
              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                <a href="#" className="text-black">Ingresar</a>
                <a href="#" className="text-white text-decoration-none px-3 py-1 bg-primary rounded-4">Registrarse</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
