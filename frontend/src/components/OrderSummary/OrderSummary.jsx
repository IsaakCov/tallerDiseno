import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";
import "./OrderSummary2.css";

export default function OrderDetails2() {
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
                      <p>Diego Castro</p>
                    </MDBCol>

                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Dirección</p>
                      <p>La punta del Cerro Renca</p>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                  <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Fecha</p>
                      <p>30/08/2023</p>
                    </MDBCol>

                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">N° de Orden</p>
                      <p>8291892dhsdg</p>
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
                      <MDBCol md="8" lg="9">
                        <p>BEATS Solo 3 Wireless </p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p>250.000</p>
                      </MDBCol>
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
                              $300.000
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