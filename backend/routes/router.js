const express = require('express');
const router = express.Router();

// Importacion de los routers de cada controlador
const usuariosRouter = require('./usuariosRouter');


// Uso de los routers en la API
router.use('/usuarios', usuariosRouter);

module.exports = router;