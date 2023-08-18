// import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "../Order/ordersummary.css";

const PaymentInfo = () => {
  const { cart } = useContext(dataContext);

  // Calculate total
  const total = cart.reduce((acc, product) => acc + product.Precio, 0);

  return (
    <div className="container mt-5">
      <h2>Proceso de Compra</h2>
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
      <p className="mt-3">Total a pagar: ${total}</p>

      <div className="container mt-5">
        <h2>Datos de transferencia</h2>
        <div className="card">
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/shipping-info" className="btn btnOrder">
            Volver
          </Link>
          <button className="btn btnOrder">Confirmar y pagar</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
