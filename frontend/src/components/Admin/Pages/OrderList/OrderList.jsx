import React, { useState, useEffect } from 'react';
import './orderlist.css';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const OrderList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/v1/pedidos/getAllPedidos`);

      if (Array.isArray(response.data.pedidos)) {
        const modifiedData = response.data.pedidos.map((pedido) => {
          const direccionEnvio = `${pedido.DireccionEnvio}, ${pedido.DireccionEnvio}, ${pedido.DireccionEnvio}, ${pedido.DireccionEnvio}`;
          return {
            ...pedido,
            DireccionEnvio: direccionEnvio.Calle,
          };
        });
        setData(modifiedData);
      } else {
        console.error("La respuesta no contiene un arreglo:", response.data.pedidos);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Manejo del error
    }
  };

  if (!Array.isArray(data) || data.length === 0) {
    console.log(data);
    return <p>Loading...</p>;
    // Otra acción que consideres apropiada mientras cargan los datos
  }

  const columns = [
    { field: 'idPedido', headerName: 'ID', width: 70 },
    { field: 'CorreoUsuario', headerName: 'Correo', width: 200 },
    { field: 'DireccionEnvio', headerName: 'Dirección', width: 200 },
    { field: 'TotalPedido', headerName: 'Monto', width: 200 },
    { field: 'Estado', headerName: 'Estado', width: 120 },
  ];

  return (
    <div style={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={data}
        getRowId={(data) => data.idPedido}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
};

export default OrderList;