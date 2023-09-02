import React from "react";
import { useContext, useState, useEffect } from "react";
import { dataContext } from "../MarketPlace/Context/DataContext";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";
import "./OrderSummary2.css";

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
        const response = await fetch(`http://localhost:3001/api/v1/pedidos/getLastPedidoByUser/${correoUsuario}`); // Cambia la ruta a tu endpoint real
        const data = await response.json();
        console.log(data);
        setLastPedido(data.lastPedido);
        // Actualizar la fecha y el número de orden con los datos del último pedido
        if (data.lastPedido) {
          let fecha = data.lastPedido.createdAt
          setFechaPedido(data.lastPedido.createdAt); // Cambia el nombre del campo si es diferente en tu modelo
          setNumeroOrden(data.lastPedido.idPedido); // Asegúrate de tener el campo numeroOrden en tu modelo de pedido
        }
      } catch (error) {
        console.error("Error fetching last pedido:", error);
      }
    };
    fetchLastPedido();
  }, []);
  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#456884" }}>
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
                      <p>{lastPedido?.DireccionEnvio.substring(1, lastPedido.DireccionEnvio.length - 1)}</p>
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
                    className="mx-n5 px-5 py-4" style={{ backgroundColor: "#f2f2f2" }}
                  >
                      <p
                    className="lead fw-bold mb-4 pb-2" style={{ color: "#456884" }}
                  >
                    Productos
                  </p>
                    <MDBRow>
                    <ul className="list-group">
                      {cart.map((product) => (
                        <li key={product.idProducto} className="list-group-item">
                        <div className="d-flex align-items-center">
                        <img
                          src={product.Imagen}
                          alt={product.Nombre}
                          className="img-thumbnail mr-3"
                          style={{ maxWidth: "100px" }}
                        />
                        <div>
                          <h4 className="px-5">{product.Nombre}</h4>
                          <p className="px-5">Cantidad: {product.Stock}</p>
                          <p className="px-5">Precio: ${product.Precio}</p>
                        </div>
                      </div>
                    </li>
                    ))}
                    </ul>
                    </MDBRow>
                    
                      
                  </div>
                  
                
                
                  {/* <MDBRow className="my-4">

                  
                    <MDBCol md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                  
                      <p
                      className="lead fw-bold mb-0" style={{ color: "#456884" }}>
                      $250.000
                      </p>
                    </MDBCol>
                    
                  </MDBRow> */}
                  
                  <p
                    className="lead fw-bold mb-4 pb-2"
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

                  <p className="mt-4 pt-2 mb-0">
                    ¡Muchas gracias por tu compra! {" "}
                  </p> 

                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}