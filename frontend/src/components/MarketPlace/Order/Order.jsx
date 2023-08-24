import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link, useNavigate } from "react-router-dom"; // Importa useHistory
import '../Order/ordersummary.css'

const Order = () => {
  const { cart } = useContext(dataContext);
  const navigate = useNavigate(); // Inicializa useHistory

  const total = cart.reduce((acc, el) => acc + el.Precio * el.Stock, 0);

  const handleContinue = () => {
    // Obtener el correo del usuario desde localStorage
    const userEmail = localStorage.getItem("Correo");

    // Verificar si el usuario está autenticado (correo existe)
    if (!userEmail) {
      // El usuario no está autenticado, muestra un mensaje o realiza una acción adecuada
      alert("Debes iniciar sesión para continuar.");
      // Redirige al usuario a la página de inicio de sesión o donde desees
      navigate("/"); // Cambia la ruta según tu configuración
    } else {
      // El usuario está autenticado, permite que continúe
      navigate("/shipping-info"); // Redirige al siguiente paso
    }
  };

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
        <button className="btn btnOrder" onClick={handleContinue}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Order;
