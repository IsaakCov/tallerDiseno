import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {
  const [imagenProducto, setImagenProducto] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [descripcionProducto, setDescripcionProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState(0);
  const [stockProducto, setStockProducto] = useState(1);
  const [colorProducto, setColorProducto] = useState('');
  const [medidasProducto, setMedidasProducto] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${backendUrl}/api/v1/productos/createProducto`,
        {
          Nombre: nombreProducto,
          Descripcion: descripcionProducto,
          Precio: precioProducto,
          /*       Stock: stockProducto, */
          Imagen: imagenProducto,
          Color: colorProducto,
          Medidas: medidasProducto,
        }
      );
      setSuccessMessage("Producto creado con éxito");
      console.log("Producto eliminado con éxito", response.data);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      console.log("Producto Creado con éxito", response.data);
    } catch (error) {
      setErrorMessage("Error al crear el producto");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      console.log(error);
    }
  }



  const [idProducto, setIdProducto] = useState('');

  const handleDeleteBtn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(
        `http://localhost:3001/api/v1/productos/deleteProducto/${idProducto}`
      );
      setSuccessMessage("Producto eliminado con éxito");
      console.log("Producto eliminado con éxito", response.data);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      setErrorMessage("Error al eliminar el producto");
      console.log("Error al eliminar el producto", error);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };


  return (
    <div>

      {/* Alertas */}
      <div className='d-flex justify-content-center'>
        {successMessage && <div className="alert alert-success w-25 h-25">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger w-25 h-25">{errorMessage}</div>}
      </div>


      <div className='d-flex justify-content-center align-content-center mt-5 '>
        <form onSubmit={handleSubmit} className='d-flex flex-column gap-2 w-'>
          <h2>Crear Producto</h2>
          <label htmlFor="imgproducto">URL</label>
          <input
            type="text"
            name='imgproducto'
            value={imagenProducto}
            onChange={(e) => setImagenProducto(e.target.value)}
            placeholder="URL de la imagen"
          />
          <label htmlFor="nombre">Nombre</label>
          <input
            name='nombre'
            type="text"
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
            placeholder="Nombre del producto"
          />

          <label htmlFor="descripcion">Descripción</label>
          <input
            name='descripcion'
            type="text"
            value={descripcionProducto}
            onChange={(e) => setDescripcionProducto(e.target.value)}
            placeholder="Descripción del producto"
          />
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            name='precio'
            value={precioProducto}
            onChange={(e) => setPrecioProducto(parseFloat(e.target.value))} // Corregido
            placeholder="Precio del producto"
          />

          <input
            className='d-none'
            type="number"
            name='stock'
            value={stockProducto}
            onChange={(e) => setStockProducto(parseInt(e.target.value))} // Corregido
            placeholder="Stock del producto"
            disabled
          />

          <label htmlFor="precio">Color</label>
          <input
            type="text"
            value={colorProducto}
            onChange={(e) => setColorProducto(e.target.value)}
            placeholder="Color del producto"
          />

          <label htmlFor="medidas">Medidas</label>
          <input
            type="text"
            name='medidas'
            value={medidasProducto}
            onChange={(e) => setMedidasProducto(e.target.value)}
            placeholder="Medidas del producto"
          />
          <button type="submit">Subir Producto</button>
        </form>

        <form onSubmit={handleDeleteBtn} className='d-flex flex-column gap-2 p-5'>
          <label htmlFor="idproducto">Eliminar Producto por ID</label>
          <input
            type="text"
            name="idproducto"
            value={idProducto}
            onChange={(e) => setIdProducto(e.target.value)}
            placeholder="ej: 423ecc63-f367-4a65-9bf8-94761a491eef"
          />
          <button type="submit">Eliminar producto</button>
        </form>

      </div>
    </div>
  );
};

export default CreateProduct;


