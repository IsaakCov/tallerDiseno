import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Obtener los datos desde la base de datos
    fetch('http://localhost:3001/api/v1/productos/getAllProductos') // Reemplaza con la URL correcta de tu API
      .then(response => response.json())
      .then(data => {
        setData(data); // Actualizar el estado con los datos obtenidos
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = [
    { field: 'idProducto', headerName: 'ID', width: 70 },
    { field: 'Descripcion', headerName: 'Descripcion', width: 200 },
    { field: 'Medidas', headerName: 'Medidas', width: 200 },
    { field: 'Precio', headerName: 'Precio', width: 200 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;