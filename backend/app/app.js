const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const router = require('../routes/router');

// Solucionamos el intercambio de recursos cruzado de origen cruzado (CORS) con el front
app.use(cors());
// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Ocupamos morgan, especificando que es para desarrollo, con el fin de llevar registro de las requests.
app.use(morgan('dev'));

// Introducimos el middleware para el uso de la API
app.use('/api/v1', router);


module.exports = app;