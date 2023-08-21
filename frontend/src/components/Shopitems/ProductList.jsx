import React, { useState, useEffect } from "react";
import RelatedProduct from "./RelatedProduct";

function ProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/productos/getAllProductos")
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
