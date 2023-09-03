import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import { Link, useNavigate } from "react-router-dom";
import '../Order/ordersummary.css'
import axios from "axios";
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const ShippingInfo = () => {
  const { cart } = useContext(dataContext);

  const [CorreoUsuario, setCorreoUsuario] = useState(localStorage.getItem('Correo'));
  const [DireccionEnvio, setDireccionEnvio] = useState('');
  const [Depto, setDepto] = useState('');
  const [Region, setRegion] = useState('Metropolitana de Santiago');
  const [Comuna, setComuna] = useState('');
  const [Instrucciones, setInstrucciones] = useState('');


  const total = cart.reduce((acc, el) => acc + el.Precio * el.Stock, 0);
  const [TotalPedido, setTotalPedido] = useState(total);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(

        `${backendUrl}/api/v1/pedidos/postPedidos`,
        {
          CorreoUsuario: CorreoUsuario,
          DireccionEnvio: DireccionEnvio,
          Depto: Depto,
          Region: Region,
          Comuna: Comuna,
          Instrucciones: Instrucciones,
          TotalPedido: TotalPedido
        }
      );
      navigate("/ordersummary");
      console.log('Pedido correcto')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="container mt-5">
      <h2>Resumen de Compra</h2>
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

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <fieldset className="mb-4">
          <legend>Dirección de envío</legend>

          <div className="mb-3 d-none">
            <label className="form-label text-start">Correo Usuario</label>
            <input type="text" className="form-control"
              value={CorreoUsuario}
              onChange={(e) => setCorreoUsuario(e.target.value)} />
          </div>

          <div className="mb-3 d-none">
            <label className="form-label text-start">Total a pagar</label>
            <input type="text" className="form-control"
              value={TotalPedido}
              onChange={(e) => setTotalPedido(e.target.value)} />

          </div>

          <div className="mb-3">
            <label className="form-label text-start">Dirección</label>
            <input
              type="text"
              value={DireccionEnvio}
              onChange={(e) => {
                setDireccionEnvio(e.target.value);
              }}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-start">Depto/Casa/Oficina</label>
            <input type="text" className="form-control"
              value={Depto}
              onChange={(e) => setDepto(e.target.value)}
              required />
          </div>


          <div className="mb-3">
            <label className="form-label text-start">Región</label>
            <select className="form-select"
              value={Region}
              onChange={(e) => setRegion(e.target.value)}
              required>

              <option value="metropolitana">
                Metropolitana de Santiago
              </option>
              <option value="Tarapacá">Tarapacá</option>
              <option value="Antofagasta">Antofagasta</option>
              <option value="Atacama">Atacama</option>
              <option value="Coquimbo">Coquimbo</option>
              <option value="Valparaíso">Valparaíso</option>
              <option value="Libertador B. Ohiggins">Libertador B. Ohiggins</option>
              <option value="Biobío">Biobío</option>
              <option value="La Araucanía">La Araucanía</option>
              <option value="Los Lagos">Los Lagos</option>
              <option value="Aysén del Gral. C. Ibáñez del Campo">Aysén del Gral. C. Ibáñez del Campo</option>
              <option value="Magallanes y la Antártica Chilena">Magallanes y la Antártica Chilena</option>
              <option value="De Los Ríos">De Los Ríos</option>
              <option value="Arica y Parinacota">Arica y Parinacota</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Comuna</label>
            <input
              type="text"
              className='form-control'
              value={Comuna}
              onChange={(e) => setComuna(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-start">
              Instrucciones entrega
            </label>
            <textarea
              className='form-control'
              value={Instrucciones}
              onChange={(e) => setInstrucciones(e.target.value)}
            />
          </div>
        </fieldset>

        {/* botones */}
        <Link to="/order" className="btn btnOrder">
          Volver
        </Link>

        {/* <button type="submit" className="btn btnOrder"> Continuar al pago </button> */}


        <button
          type="button"
          className="btn btnOrder"
          onClick={(e) => {
            e.preventDefault(); // Evita la navegación predeterminada
            handleSubmit(e); // Realiza la solicitud POST
          }}
        >
          Continuar al pago
        </button>

      </form>
    </div>
  );
};

export default ShippingInfo;
