//import React from 'react'
import '../componentsCSS/CompromisoySer.css'
import '../componentsCSS/botones.css'
import silla from '../img/silla.webp'
import { useRef } from 'react';

const Compromiso = () => {
  const compromisoSectionRef = useRef(null);

  return (
    <section id="compromiso" ref={compromisoSectionRef}>
    <h2 className="text-center m-5">Nuestro Compromiso</h2>
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
          Nuestro compromiso es trabajar con máxima eficiencia, priorizando los requerimientos de nuestros clientes y cuidando meticulosamente los materiales y el diseño. 
          </p>
          <p className="pCompromiso">
          Nos enorgullece preservar la historia de cada mueble, ofreciendo un servicio personalizado y responsable con el medio ambiente. Nuestro equipo de expertos en restauración y diseño crea piezas elegantes y con estilo, garantizando la satisfacción de nuestros clientes en cada proyecto. 
          </p>
          <p className="pCompromiso">
          Confía en nosotros para dar nueva vida a tus muebles antiguos o crear nuevas creaciones que se integren perfectamente en tu espacio. ¡Contáctanos hoy mismo y descubre la magia de Taller Diseño!
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Compromiso;