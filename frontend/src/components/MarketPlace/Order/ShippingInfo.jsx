import React, { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; // Asegúrate de importar el useForm adecuadamente

const ShippingInfo = () => {
  const { cart } = useContext(dataContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

  const onSubmit = (data) => {
    console.log(data); // aquí puedes enviar los datos del formulario
  };

  return (
    <div className="container mt-5">
      <h2>Resumen de Compra</h2>
      <ul className="list-group">
        {cart.map((product) => (
          <li key={product.id} className="list-group-item">
          <div className="d-flex align-items-center">
            <img
              src={product.img}
              alt={product.name}
              className="img-thumbnail mr-3"
              style={{ maxWidth: "100px" }}
            />
            <div>
              <h4 className="px-5">{product.name}</h4>
              <p className="px-5">Cantidad: {product.quanty}</p>
              <p className="px-5">Precio: ${product.price}</p>
            </div>
          </div>
        </li>
        ))}
      </ul>
      <p className="mt-3">Total a pagar: ${total}</p>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="mb-4">
              <legend>Dirección de envío</legend>
              <div className="mb-3">
                <label className="form-label text-start">Dirección</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.direccion ? "is-invalid" : ""
                  }`}
                  {...register("direccion", {
                    required: true,
                  })}
                />
                {errors.direccion?.type === "required" && (
                  <div className="invalid-feedback">El campo es requerido</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label text-start">Número</label>
                <input
                  type="number"
                  className={`form-control ${
                    errors.numero ? "is-invalid" : ""
                  }`}
                  {...register("numero", {
                    required: true,
                  })}
                />
                {errors.numero?.type === "required" && (
                  <div className="invalid-feedback">El campo es requerido</div>
                )}
              </div>

              <div className="mb-3">
              <label className="form-label text-start">Depto/Casa/Oficina</label>
              <input type="text" className="form-control"
              {...register("especificacion", {
              required: false, })}
              />
              </div>


              <div className="mb-3">
                <label className="form-label text-start">Región</label>
                <select className="form-select" {...register("region")}>
                  <option value="metropolitana">
                    Metropolitana de Santiago
                  </option>
                  <option value="tarapaca">Tarapacá</option>
                  <option value="antofagasta">Antofagasta</option>
                  <option value="atacama">Atacama</option>
                  <option value="coquimbo">Coquimbo</option>
                  <option value="valparaiso">Valparaíso</option>
                  <option value="libertador">Libertador B. O'higgins</option>
                  <option value="biobio">Biobío</option>
                  <option value="araucania">La Araucanía</option>
                  <option value="lagos">Los Lagos</option>
                  <option value="aysen">Aysén del Gral. C. Ibáñez del Campo</option>
                  <option value="magallanes">Magallanes y la Antártica Chilena</option>
                  <option value="rios">De Los Ríos</option>
                  <option value="arica">Arica y Parinacota</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Comuna</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.comuna ? "is-invalid" : ""
                  }`}
                  {...register("comuna", {
                    required: true,
                  })}
                />
                {errors.comuna?.type === "required" && (
                  <div className="invalid-feedback">El campo es requerido</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label text-start">
                  Instrucciones entrega
                </label>
                <textarea
                  className={`form-control ${
                    errors.instruccion ? "is-invalid" : ""
                  }`}
                  rows="4"
                  {...register("instruccion")}
                />
              </div>
            </fieldset>

        {/* botones */}
        <button type="submit" className="btn btn-primary">
              Continuar
        </button>
        
        <div className="d-flex justify-content-between">
          <Link to="/order" className="btn btn-secondary">
          1. Order Summary
          </Link>
          <Link to="/shipping-info" className="btn btn-secondary">
          2. Shipping Information
          </Link>
          <Link to="/payment-info" className={`btn btn-secondary ${Object.keys(errors).length !== 0 ? 'disabled' : ''}`}>
          3. Payment Information
          </Link>
        </div>
      
      </form>
    </div>
  );
};

export default ShippingInfo;
