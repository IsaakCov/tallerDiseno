import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import "../Products/Products.css";
import axios from "axios";
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/v1/productos/getAllProductos`
      );

      if (Array.isArray(response.data.productos)) {
        setData(response.data.productos);
      } else {
        console.error(
          "La respuesta no contiene un arreglo:",
          response.data.productos
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Manejo del error
    }
  };
  /* 
  if (!Array.isArray(data) || data.length === 0) {
    console.log(data);
    return <p>Loading...</p>;
    // Otra acción que consideres apropiada mientras cargan los datos
  } */

  return data.map((product) => (
    <div
      id="product-market"
      className="card container products"
      key={product.idProducto}
    >
      <div className="row align-items-center px-3">
        <div className="col-md-4">
          <Link to={`items/${product.Nombre}`}>
            <img src={product.Imagen} alt="img-product-card" />
          </Link>
        </div>
        <div className="col-md-4">
          <h3>{product.Nombre}</h3>
          <p>Características</p>
          <ul>
            <li>
              <b>Color :</b> {product.Color}
            </li>
            <li>
              <b>Medidas :</b>
              {product.Medidas}
            </li>
          </ul>
        </div>
        <div id="areaButton" className="col-md-4">
          <h4>${product.Precio}</h4>
          <button onClick={() => buyProducts(product)}>Comprar</button>
        </div>
      </div>
    </div>
  ));
};

export default Products;
