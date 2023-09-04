// import React from 'react'
import '../componentsCSS/hero-section.css'
import { Link } from 'react-router-dom'
const Encabezado = () => (
    <section id="slide-section" className="container-fluid p-0">
        <div className="carousel slide" id="header-carousel">
            <div className="carousel-inner">
                {/* <!-- Slide 1 --> */}
                <div className="carousel-item active" id="slide1">
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-md-3">
                            <h4 className="section-title text-white animated slideInDown">Taller Diseño</h4>
                            <h2 className="display-3 text-white m-4 animated slideInDown ">Personaliza tus muebles</h2>
                            <Link to = {"/contact"}>
                            <a className="btn btn-light py-md-3 px-md-5 animated slideInRight">¡Contáctanos!</a>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                {/* <!-- Slide 2 a la derecha --> */}
                <div className="carousel-item" id="slide2">
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="p-md-3">
                            <h4 className="section-title text-white animated slideInDown">Diseños Iconográficos</h4>
                            <h2 className="display-3 text-white m-4 animated slideInDown ">Conoce nuestros productos</h2>
                            
                            <Link to = {"/Marketplace"}>
                                <a className="btn btn-light py-md-3 px-md-5 ms-auto animated slideInRight">Ver más</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {/* <!-- Botones de control --> */}
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">next</span>
            </button>
        </div>
    </section>
)

export default Encabezado