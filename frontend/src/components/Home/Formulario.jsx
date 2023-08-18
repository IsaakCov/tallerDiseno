<<<<<<< HEAD:frontend/src/components/Formulario.jsx
import React, { useState } from "react";
import axios from "axios";
import "./componentsCSS/style.css";
=======
// import React from 'react'
import '../componentsCSS/CompromisoySer.css'
import '../componentsCSS/botones.css'
import '../componentsCSS/hero-section.css'
import '../componentsCSS/servicios.css'
import '../componentsCSS/timeline.css'
>>>>>>> Pedro:frontend/src/components/Home/Formulario.jsx

const Formulario = () => {
  const [formData, setFormData] = useState({
    CorreoUsuario: "",
    Asunto: "",
    Comentario: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/api/v1/formulario/sendform", formData) // Cambia la URL según corresponda
      .then((response) => {
        console.log(response.data);
        // Realiza cualquier acción adicional que necesites después del envío
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
              <form className="contactForm" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="CorreoUsuario"
                    name="CorreoUsuario"
                    placeholder="Correo"
                    required
                    value={formData.CorreoUsuario}
                    onChange={handleChange}
                  />
                  <label htmlFor="CorreoUsuario">Correo</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Asunto"
                    name="Asunto"
                    placeholder="Asunto"
                    required
                    value={formData.Asunto}
                    onChange={handleChange}
                  />
                  <label htmlFor="Asunto">Asunto</label>
                </div>
                <div className="form-floating mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Comentario"
                    id="Comentario"
                    name="Comentario"
                    style={{ height: "100px" }}
                    required
                    value={formData.Comentario}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="Comentario">Comentario</label>
                </div>
                <input
                  name="btn"
                  id="btn"
                  className="btn-lg btn-primary"
                  type="submit"
                  value="Enviar"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formulario
