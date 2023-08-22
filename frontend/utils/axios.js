/*import axios from 'axios';
//import dotenv from 'dotenv';
//dotenv.config();
//const jwtSecret = process.env.REACT_APP_JWT_SECRET;

// Crea una instancia de Axios
const instance = axios.create({
  baseURL: 'http://localhost:3001', // Reemplaza con la URL de tu servidor backend
});

// Intercepta todas las solicitudes antes de enviarlas
instance.interceptors.request.use(
  (config) => {
    //const jwtSecret = process.env.REACT_APP_JWT_SECRET;
    const token = localStorage.getItem('token'); // Obtiene el token del almacenamiento local
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Agrega el token al encabezado de autorización
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;*/