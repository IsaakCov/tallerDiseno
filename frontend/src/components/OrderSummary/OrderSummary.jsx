import { useContext, useState, useEffect } from "react";
import { dataContext } from "../MarketPlace/Context/DataContext";
import numero1 from "../img/numero1.png";
import numero2 from "../img/numero2.png";
import numero3 from "../img/numero3.png";
import numero4 from "../img/numero4.png";
import "../OrderSummary/timeline2.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import "./OrderSummary2.css";
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export default function OrderDetails2() {
  const { cart } = useContext(dataContext);
  const total = cart.reduce((acc, el) => acc + el.Precio * el.Stock, 0);

  const [lastPedido, setLastPedido] = useState(null);
  const [fechaPedido, setFechaPedido] = useState("");
  const [numeroOrden, setNumeroOrden] = useState("");
  const correoUsuario = localStorage.getItem("Correo");

  useEffect(() => {
    const fetchLastPedido = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/v1/pedidos/getLastPedidoByUser/${correoUsuario}`
        );
        const data = await response.json();
        console.log(data);
        setLastPedido(data.lastPedido);

        if (data.lastPedido) {
          // Convertir la fecha completa a un objeto Date
          const fecha = new Date(data.lastPedido.createdAt);

          // Obtener la parte de la fecha en formato 'yyyy-mm-dd'
          const fechaFormateada = fecha.toISOString().split("T")[0];

          // Asignar la fecha formateada
          setFechaPedido(fechaFormateada);

          setNumeroOrden(data.lastPedido.idPedido);
        }
      } catch (error) {
        console.error("Error fetching last pedido:", error);
      }
    };
    fetchLastPedido();
  }, []);

  return (
    <>
      <section className="resume__container">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-left h-100">
            <MDBCol lg="8" xl="6">
              <MDBCard className="border-top border-bottom border-3 border-color-custom">
                <MDBCardBody className="p-5">
                  <p className="lead fw-bold mb-5" style={{ color: "#456884" }}>
                    Resumen de Pedido
                  </p>

                  <MDBRow>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Nombre</p>
                      <p>{lastPedido?.CorreoUsuario}</p>
                    </MDBCol>

                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Dirección</p>
                      <p>
                        {lastPedido?.DireccionEnvio} {lastPedido?.Depto}{" "}
                        {lastPedido?.Comuna} {lastPedido?.Region}
                      </p>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Fecha</p>
                      <p>{fechaPedido}</p>
                    </MDBCol>

                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">N° de Orden</p>
                      <p>{numeroOrden}</p>
                    </MDBCol>
                  </MDBRow>

                  <div
                    className="mx-n5 px-5 py-4"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <p
                      className="lead fw-bold mb-4 pb-2"
                      style={{ color: "#456884" }}
                    >
                      Productos
                    </p>
                    <MDBRow>
                      <ul className="list-group">
                        {cart.map((product) => (
                          <li
                            key={product.idProducto}
                            className="list-group-item"
                          >
                            <div className="d-flex flex-column flex-md-row align-items-center">
                              <img
                                src={product.Imagen}
                                alt={product.Nombre}
                                className="img-thumbnail mr-3 mr-md-5"
                                style={{ maxWidth: "100px", marginRight: "10px" }}
                              />
                              <div className="ml-3">
                                <h4 className="mt-1">{product.Nombre}</h4>
                                <p className="mt-1">Cantidad: {product.Stock}</p>
                                <p className="mt-1">Precio: ${product.Precio}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </MDBRow>
                  </div>

                  <p
                    className="lead fw-bold mb-4 pb-2 mt-4"
                    style={{ color: "#456884" }}
                  >
                    Total a pagar
                  </p>

                  <MDBRow>
                    <MDBCol lg="12">
                      <div>
                        <ul className="list-inline items d-flex justify-content-between">
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#456884" }}
                            >
                              ${total}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <p className=" pt-2 mb-0">
                    ¡Muchas gracias por tu compra! A continuación, te indicamos los pasos a seguir.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="4" xl="6">
              <div className="container mt-5">
                <div className="row">
                  <div className="col align-items-center">
                    <div className="timeline2">
                      <div className="container-timeline2">
                        <img src={numero1} alt="img1" />
                        <div className="text-box-container2">
                          <h3>Presiona el siguiente enlace que te redirigirá a WhatsApp</h3>

                          <a href="https://web.whatsapp.com/send/?phone=56930268586&text=Hola+somos+Taller+Dise%C3%B1o+%0ACuentanos+como+podemos+ayudarte" target="_blank" className="whatsapp" style={{ color: 'black' }}>
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                          </a>

                          <span className="container-arrow2"></span>
                        </div>
                      </div>

                      <div className="container-timeline2">
                        <img src={numero2} alt="img1" />
                        <div className="text-box-container2">
                          <h3>Indica el número de pedido o el correo </h3>
                          {/* <small>Información y Cotización</small>
                          <p>Esta etapa es esencial para conocer tus requerimientos y entregar un valor aproximado del proyecto.</p> */}
                          <span className="container-arrow2"></span>
                        </div>
                      </div>

                      <div className="container-timeline2">
                        <img src={numero3} alt="img1" />
                        <div className="text-box-container2">
                          <h3>Coordina el envío del producto</h3>
                          {/* <small>Boceto</small>
                          <p>Empezaremos con la creación de los bocetos, proponiendo diseños, colores, materiales, etc.</p> */}
                          <span className="container-arrow2"></span>
                        </div>
                      </div>

                      <div className="container-timeline2">
                        <img src={numero4} alt="img1" />
                        <div className="text-box-container2">
                          <h3>
                            Te indicaremos los datos de transferencia más el
                            monto total{" "}
                          </h3>
                          {/* <small>Producción</small>
                          <p>En esta etapa se comienza a materializar el proyecto.</p> */}
                          <span className="container-arrow2"></span>
                        </div>
                        {/* ... Tu contenido del timeline ... */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
