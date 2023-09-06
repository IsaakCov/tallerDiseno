import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../componentsCSS/style.css";
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
const Formulario = () => {
  const [formData, setFormData] = useState({
    CorreoUsuario: "",
    Asunto: "",
    Comentario: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Obtener el correo del usuario desde localStorage cuando el componente se monta
    const emailActualUser = localStorage.getItem("Correo");
    if (emailActualUser) {
      setFormData((prevData) => ({
        ...prevData,
        CorreoUsuario: emailActualUser,
      }));
    }
  }, []); // El segundo argumento del useEffect es un arreglo vacío para que se ejecute una sola vez al montar el componente

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar si el campo CorreoUsuario está vacío
    if (!formData.CorreoUsuario) {
      alert("Debes estar autenticado para enviar el formulario. Por favor, ve al home y realiza tu Login.");
      return; // No se envía el formulario
    }

    axios
      .post(`${backendUrl}/api/v1/formulario/sendform`, formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          CorreoUsuario: "",
          Asunto: "",
          Comentario: "",
        });

        setTimeout(() => {
          alert('Formulario enviado con éxito, muchas gracias por contactarnos. Será redireccionado a la página principal.');
        }, 100);


        setTimeout(() => {
          navigate('/')
        }, 1000);

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <div className="container mt-4 border bg-light shadow" id="cont">
        <div className="row">
          <div className="col-md-12  py-5">
            <h2 className="mb-5">¡Contáctanos!</h2>
            <div className="container">
              <form className="contactForm" onSubmit={handleSubmit}>
                <div className="form-floating mb-3 d-none">
                  <input
                    type="text"
                    className="form-control"
                    id="CorreoUsuario"
                    name="CorreoUsuario"
                    placeholder="Correo"
                    required
                    value={formData.CorreoUsuario}
                    onChange={handleChange}
                    disabled // Deshabilita la edición del correo
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
                  className="btn__form btn-lg btn-primary "
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

export default Formulario;