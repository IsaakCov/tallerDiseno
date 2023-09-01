const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const router = require('../routes/router');
//const nodemailer = require('nodemailer');
// Solucionamos el intercambio de recursos cruzado de origen cruzado (CORS) con el front
app.use(cors());
// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Ocupamos morgan, especificando que es para desarrollo, con el fin de llevar registro de las requests.
app.use(morgan('dev'));

// Introducimos el middleware para el uso de la API
app.use('/api/v1', router);

// Configura el transporter con tus credenciales SMTP
/*const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

// Verifica la conexión con el servidor SMTP
transporter.verify((error) => {
  if (error) {
    console.error('Error en la conexión SMTP:', error);
  } else {
    console.log('Conexión SMTP exitosa');
  }
});*/

module.exports = app;