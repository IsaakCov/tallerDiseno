import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import '../Order/ordersummary.css'

const Order = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.Precio * el.Stock, 0);

  return (
    <div className="container mt-5">


      <h2>Orden de Compra</h2>
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
      <p className="mt-3">Total a Pagar: ${total}</p>
      
      
      <div className="d-flex justify-content-between mb-5">
        <Link to="/shipping-info" className="btn btnOrder">
          Continuar
        </Link>
      </div>

    </div>
  );
};

export default Order;
