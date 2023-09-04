import { useEffect, useState } from 'react';
import axios from 'axios';
import './AccountSettings.css';
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const AccountSettings = () => {
  const [userInfo, setUserInfo] = useState(null);
  const correoUsuario = localStorage.getItem('Correo');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Realiza una solicitud al backend para obtener los detalles del usuario por su correo
        const response = await axios.get(`${backendUrl}/api/v1/usuarios/findUsuario/${correoUsuario}`);
        // Almacena los datos del usuario en el estado
        setUserInfo(response.data.usuario);
      } catch (error) {
        console.error('Error al obtener los detalles del usuario:', error);
      }
    };

    // Verifica si hay un correo de usuario en el localStorage antes de hacer la solicitud
    if (correoUsuario) {
      fetchUserInfo();
    }
  }, [correoUsuario]);

  return (
    <div className='accountSettings'>
      <h1 className='mainhead1'>Información Personal</h1>

      <div className='form'>
        <i className='userlogo bi bi-person-circle'></i>

        <table className='yourOrdersTable'>
          <thead>
            <tr>
              <th scope='col'>Nombre y Apellido</th>
              <th scope='col'>Correo</th>
              <th scope='col'>Celular/Telefono</th>
            </tr>
          </thead>
          <tbody>
            {userInfo && (
              <tr>
                <td data-label='Nombre y Apellido'>{userInfo.Nombre} {userInfo.Apellido}</td>
                <td data-label='Correo'>{userInfo.Correo}</td>
                <td data-label='Celular/Telefono'>{userInfo.Telefono}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountSettings;