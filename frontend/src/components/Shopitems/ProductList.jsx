import React, { useState, useEffect } from "react";
import RelatedProduct from "./RelatedProduct";
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

function ProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/productos/getAllProductos`)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Hubo un problema, compadre: ", error));
  }, []);

  return (
    <div>
      <RelatedProduct items={productos} />
    </div>
  );
}

export default ProductList;
