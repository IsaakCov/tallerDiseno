// import React from 'react'
import "../componentsCSS/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container p-5 d-flex flex-column flex-md-row justify-content-center align-content-center">
        <div className="col-12 col-md-6  left-column">
          <ul>
            <li>
              <h3 className="footer__titulo">Terminos y Condiciones</h3>
            </li>
            <li>
              {" "}
              <button
                type="button"
                className="btn btn-primary btnfooter"
                data-bs-toggle="modal"
                data-bs-target="#reembolso"
              >
                Politicas de Reembolso
              </button>
              <div
                className="modal fade"
                id="reembolso"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body className1">
                      <h2>Politicas de Reembolso</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {" "}
              <button
                type="button"
                className="btn btn-primary btnfooter"
                data-bs-toggle="modal"
                data-bs-target="#envio"
              >
                Politicas de Envío
              </button>
              <div
                className="modal fade"
                id="envio"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h2>Politicas de Envío</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {" "}
              <button
                type="button"
                className="btn btn-primary btnfooter"
                data-bs-toggle="modal"
                data-bs-target="#servicio"
              >
                Términos del servicio
              </button>
              <div
                className="modal fade"
                id="servicio"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h2>Términos del servicio</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-primary btnfooter"
                data-bs-toggle="modal"
                data-bs-target="#precios"
              >
                Precios y pagos
              </button>

              <div
                className="modal fade"
                id="precios"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h2>Precios y pagos</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {" "}
              <button
                type="button"
                className="btn btn-primary btnfooter"
                data-bs-toggle="modal"
                data-bs-target="#garantia"
              >
                Garantía
              </button>
              {/*  */}
              <div
                className="modal fade"
                id="garantia"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h2>Garantía</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {" "}
              <button
                type="button"
                className="btn btn-primary btnfooter"
                data-bs-toggle="modal"
                data-bs-target="#privacidad"
              >
                Politicas de privacidad
              </button>
              <div
                className="modal fade"
                id="privacidad"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h2>Politicas de privacidad</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat, velit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Fugiat, velit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-6 right-column">
          <ul className="text-right">
            <li className="footer__titulo">Dirección:</li>
            <li>Las Turquesas 934, Talagante</li>
            <li className="footer__titulo">Teléfono:</li>
            <li>+569 3268 586</li>
            <li className="footer__titulo">Correo:</li>
            <li>tallerdiseno.1978@gmail.com</li>
            <li className="footer__titulo">Horarios:</li>
            <li>Lunes - Viernes: 09:00 hrs -18:00 hrs</li>
            <li>Sabado - Domingo: 10:00 hrs -14:00 hrs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
