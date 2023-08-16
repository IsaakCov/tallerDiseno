// import React from 'react'
import '../componentsCSS/CompromisoySer.css'
import '../componentsCSS/botones.css'
import '../componentsCSS/hero-section.css'
import '../componentsCSS/servicios.css'
import '../componentsCSS/timeline.css'

const Formulario = () => {
  return (
    <section>
      <div className="container mt-4 border bg-light shadow" id="cont">
        <div className="row">
          <div className="col-md-4 bg-info p-5 text-white bg-primary order-sm-first order-last">
            <h2>Información de contacto y ubicación:</h2>
            {/* ... (resto del código) ... */}
          </div>
          <div className="col-md-8 p-5">
            <h2 className="mb-5">¡Contáctanos!</h2>
            <div className="container">
                {/* Aca borramos el obSubmit porque el Diego tiene miedo */}
              <form className="contactForm" > 
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="nameInput" placeholder="Name" />
                  <label htmlFor="nameInput">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                  <label htmlFor="emailInput">Correo</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="phoneInput" placeholder="900000000" />
                  <label htmlFor="phoneInput">Teléfono</label>
                </div>
                <div className="form-floating mb-4">
                  <textarea className="form-control" placeholder="Comentario de odio hacia Diego" id="commentsInput" style={{ height: "100px" }}></textarea>
                  <label htmlFor="commentsInput">Comentarios</label>
                </div>
                <input name="btn" id="btn" className="btn-lg btn-primary" type="submit" value="Enviar" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Formulario
