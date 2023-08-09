//import React from 'react'
import './componentsCSS/CompromisoySer.css'
import './componentsCSS/botones.css'
import './componentsCSS/hero-section.css'
import './componentsCSS/servicios.css'
import './componentsCSS/style.css'
import './componentsCSS/timeline.css'
import silla from './img/silla.webp'
const Compromiso = () => {
  return (
    <section id="compromiso">
    <h1 className="text-center m-5">Nuestro Compromiso</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 d-flex justify-content-center align-content-center">
          <img
            src={silla}
            alt="sillaErgonomica"
            id="sillaverde"
            className="img-fluid"
          />
        </div>
        <div
          className="col-md-6 col-lg-6 d-flex flex-column justify-content-center"
        >
          <p className="pCompromiso">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nobis
            magnam deleniti aliquam totam labore error voluptatem laboriosam
            fugit cupiditate in, aspernatur dignissimos, quis dolores sint
            odit ullam, recusandae vel.
          </p>
          <p className="pCompromiso">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nobis
            magnam deleniti aliquam totam labore error voluptatem laboriosam
            fugit cupiditate in, aspernatur dignissimos, quis dolores sint
            odit ullam, recusandae vel.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Compromiso;