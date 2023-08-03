// import React from 'react'
import './componentsCSS/CompromisoySer.css'
import './componentsCSS/botones.css'
import './componentsCSS/hero-section.css'
import './componentsCSS/servicios.css'
import './componentsCSS/style.css'
import './componentsCSS/timeline.css'
import sillacafe from './img/sillacafe.png'
import sillanegra from './img/sillonrojo.png'
import sillonblanco from './img/sillonblanco.png'
const Servicios = () => {
  return (
    <section id="servicios">
    <h2 className="text-center m-5">Nuestros Servicios</h2>
    <div className="container">
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4 col-container">
          <div className="card">
            <img
              src={sillanegra}
              alt="Mueble restaurado"
              className="card-img-top"
            />
            <div className="card-body">
               <h5 className="card-tittle">Limpieza</h5>
                <p className="card-sub-title">
                Silla negra
                </p>
              <p className="card-info">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                animi sint explicabo reprehenderit molestias. Eos ea ullam
                natus, non dolorem inventore? Fugiat magnam repellat id
                voluptatibus mollitia vitae minus nisi!
              </p>
              <button className="card-btn">Cotizar</button>
            </div>
          </div>
        </div>


        <div className="col-12 col-md-6 col-lg-4 col-container">
          <div className="card">
            <img
              src={sillacafe}
              alt="Mueble restaurado"
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-tittle">Restauración</h2>
              <p className="card-sub-title">
                Mueble antiguo
                <p className="card-info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    animi sint explicabo reprehenderit molestias. Eos ea ullam
                    natus, non dolorem inventore? Fugiat magnam repellat id
                    voluptatibus mollitia vitae minus nisi!</p>
                <button className="card-btn">Cotizar</button>
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col:justify-content-center  col-md-6 col-lg-4 col-container">
            <div className="card">
              <img
                src={sillonblanco}
                alt="Mueble restaurado"
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-tittle">Tapicería</h2>
                <p className="card-sub-title">
                  Sillon blanco
                  <p className="card-info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                      animi sint explicabo reprehenderit molestias. Eos ea ullam
                      natus, non dolorem inventore? Fugiat magnam repellat id
                      voluptatibus mollitia vitae minus nisi!</p>
                  <button className="card-btn">Cotizar</button>
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </section>
  )
}

export default Servicios