import React from "react";

import { Link } from "react-router-dom";

const RelatedProduct = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div className="col mb-5" key={index}>
          <div className="card h-70 p-3">
            {/* <!-- Product image--> */}
            <img
              className="card-img-top"
              src={item.Imagen}
              alt="..."
              style={{ height: 230 }}
            />
            {/* <!-- Product details--> */}
            <div className="card-body p-4 mt-3">
              <div className="text-center">
                {/* <!-- Product name--> */}
                <h5 className="fw-bolder">{item.Nombre}</h5>
                {/* <!-- Product price--> */}${item.Precio}
              </div>
            </div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <Link
                  to={`/marketplace/items/${item.Nombre}#descripcion-producto`}
                >
                  <button
                    className="btn btn-outline-dark mt-auto mt-3"
                    href="#"
                  >
                    Ver más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
  /* }); */
};
export default RelatedProduct;
