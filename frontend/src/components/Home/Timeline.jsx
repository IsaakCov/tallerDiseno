import React from 'react'
import '../componentsCSS/CompromisoySer.css'
import '../componentsCSS/botones.css'
import '../componentsCSS/hero-section.css'
import '../componentsCSS/servicios.css'
import '../componentsCSS/style.css'
import '../componentsCSS/timeline.css'
import numero1 from '../img/numero1.png'
import numero2 from '../img/numero2.png'
import numero3 from '../img/numero3.png'
import numero4 from '../img/numero4.png'
const Timeline = () => {
  return (
    <section>


      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="timeline">
              <div className="container-timeline">
                <img src={numero1} alt="img1"/>
                <div className="text-box-container">
                  <h2>Deja tus datos en el formulario</h2>
                  <small>Contacto</small>
                  <p>Para nosotros es importante saber cómo contactarte.</p>
                  <span className="container-arrow"></span>
                </div>
              </div>
              
              <div className="container-timeline">
                <img src={numero2} alt="img1"/>
                <div className="text-box-container">
                  <h2>Te escribiremos a través de los datos de contacto que nos compartiste</h2>
                  <small>Información y Cotización</small>
                  <p>Esta etapa es esencial para conocer tus requerimientos y entregar un valor aproximado del proyecto.</p>
                  <span className="container-arrow"></span>
                </div>
              </div>
              
              <div className="container-timeline">
                <img src={numero3} alt="img1"/>
                <div className="text-box-container">
                  <h2>Comienza el proceso de ideación</h2>
                  <small>Boceto</small>
                  <p>Empezaremos con la creación de los bocetos, proponiendo diseños, colores, materiales, etc.</p>
                  <span className="container-arrow"></span>
                </div>
              </div>
              
              <div className="container-timeline">
                <img src={numero4} alt="img1"/>
                <div className="text-box-container">
                  <h2>Producción y diseño final</h2>
                  <small>Producción</small>
                  <p>En esta etapa se comienza a materializar el proyecto.</p>
                  <span className="container-arrow"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline