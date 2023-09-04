import React, { useState, useEffect } from 'react';
import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const UserList = () => {
  const [data, setData] = useState([]); 
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');
  
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/v1/usuarios/getAllUsuarios`);
      if (response.data && Array.isArray(response.data.usuarios)) {
        setData(response.data.usuarios);
      } else {
        console.error("La respuesta no contiene un arreglo:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Manejo del error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Verifica si el rol no es "ADMINISTRADOR" y redirige si es necesario
  if (userRole != 'ADMINISTRADOR') {
    alert('Acceso denegado.');
    navigate('/');
    return null; // O cualquier otra acción que desees realizar si no es un administrador
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <p>Loading...</p>;
    // Otra acción que consideres apropiada mientras cargan los datos
  }

  const columns = [
    { field: 'Nombre', headerName: 'Nombre', width: 150 },
    { field: 'Apellido', headerName: 'Apellido', width: 150 },
    { field: 'Correo', headerName: 'Correo', width: 200 },
    { field: 'Telefono', headerName: 'Teléfono', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        getRowId={(data) => data.Correo}
        checkboxSelection
        columns={columns}
        pageSize={5}
      />
    </div>
  );
};

export default UserList;