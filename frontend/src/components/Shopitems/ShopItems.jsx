import { React, useState, useEffect, useContext } from "react";
import { dataContext } from "../MarketPlace/Context/DataContext";
import { useParams } from "react-router-dom";
import RelatedProduct from "./RelatedProduct";
import axios from "axios";
import './shopitem.css'
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const ShopItems = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);
  const { Nombre } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/v1/productos/getAllProductos`
      );
      console.log(response); //JSON.parse(response));

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

  const product = data.find((shopitem) => shopitem.Nombre === Nombre);

  useEffect(() => {
    if (product) {
      document
        .getElementById("descripcion-producto")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [product]);

  if (!product) return "";
  const otherItems = data.filter((item) => item.Nombre !== Nombre);

  return (
    <>
      <section className="py-5" id="descripcion-producto">
        <div className="container px-4 px-lg-5 my-5" key={product.idProducto}>
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={product.Imagen}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              {/* <div className="small mb-1">SKU: BST-498</div> */}
              <h1 className="display-5 fw-bolder align-text-start">{product.Nombre}</h1>
              <div className="fs-5 mb-5">
                <span>${product.Precio}</span>
              </div>
              <p className="lead">{product.Descripcion}</p>
              <div className="d-flex">
                {/* <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  defaultValue="1"
                  style={{ maxWidth: "3rem" }}
                /> */}
                <button
                  onClick={() => buyProducts(product)}
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Añadir
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Productos relacionados</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <RelatedProduct items={otherItems} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopItems;
