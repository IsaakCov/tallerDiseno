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
                      El cliente puede solicitar un reembolso en un tiempo de ti hasta cinco días hábiles, 
                      El objeto por el cual necesita reembolso debe estar en buenas condiciones, en su  estado original y sin intervención alguna de modificación .
                      
                      </p>
                      <p>
                      Los costos de envío por devolución correrán a cargo del cliente a menos que el error sea por parte de la empresa como envío incorrecto o producto dañado de ser acogida la petición de devolución la empresa tendrá hasta 30 días hábiles para devolver el monto acordado.
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
                      El área de cobertura también contempla sin  costo adicional debido a promociones temporales. </p>
                      <p>
                      En la región metropolitana tiene un costo adicional dependiendo del sector de envío .
                      Los envíos a regiones dependerán de la empresa intermediaria el tiempo de proceder y los valores dependerán del artículo y la disponibilidad del intermediario.
                      </p>
                      <p>
                      Este tiempo será informado al cliente mediante comunicado posterior o compra
                      Los costos de envío serán calculados en función del tamaño peso y destino del pedido  será comunicado al cliente en el proceso de compra y días posteriores al tener la información indicada por el intermediario.
                      </p>
                      <p>
                      Nos comprometemos a empacar seguro, nos aseguraremos de que los productos sean debidamente embalados protegidos para prevenir daños durante el transporte
                      Entrega programada se agendará la fecha y la hora de entrega es posible que se requiera la presencia del cliente o un segundo representante autorizado para recibir y firmar el recibo de entrega
                      </p>
                      <p>
                      Devoluciones de envío en caso de que los productos lleguen con daño visible durante el envío se debe comunicar y se buscarán soluciones para  compensar o reemplazar los productos.
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
                      Calidad del producto nos comprometemos a ofrecer productos de alta calidad realizar todos nuestros esfuerzos para garantizar la satisfacción del cliente sin embargo tener en cuenta que debido a la naturaleza de los materiales utilizados puede haber ligeras variaciones de color textura y acabado entre las muestras y los productos finales.
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
                      Todos los precios son expresados claramente en un presupuesto solicitado por el cliente nuestros precios son acorde al mercado y tendrán variación en caso de alguna nueva solicitud que se añada o de haber alguna exclusividad adicional lo que también nos  comprometidos a revelar al cliente para su aprobación
                      </p>
                      <p>
                      En cuanto a las condiciones de pago para algunos servicios de fabricación solicitamos el 50% del total para fabricación y el saldo será cancelado a contra entrega del cliente formas de pago transferencia directa efectivo y prontamente en cuotas por medio de tarjetas bancarias, etc.
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
                      Ofrecemos una garantía limitada para los productos de muebles y tapicerías contra defectos de fabricación durante un periodo de tres meses y hasta seis meses dependiendo de la condición del servicio la garantía no cubre daños causados por mal uso abuso negligencia o desgaste normal para solicitar garantía al cliente debe comunicarse con nosotros y proporcionar pruebas coherentes del caso para autorizar la garantía de ser aprobada se buscarán todas las medidas que se requieran al caso o compensación.
                      </p>
                      <p>
                      El cliente puede solicitar una modificación en el diseño o estructura inicial del proyecto hasta pasado cinco días de la solicitud inicial acordada después de este periodo toda modificación en diseño y estructura del proyecto presentará un costo adicional según El avance en el proceso.
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
                      La empresa se compromete a mantener la privacidad del proyecto publicitario hasta tener una Clara noción de que el cliente lo permita
                      </p>
                      <p>
                      Nos comprometemos a no publicar material audiovisual ni fotografía del proyecto hasta que el cliente así lo autorice
                      </p>
                      <p>
                      Nos comprometemos a no develar datos ni información del proceso a la competencia hasta que el proyecto sea liberado publicitado y autorizado
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
