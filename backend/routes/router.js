const express = require("express");
const router = express.Router();

// Importacion de los routers de cada controlador
const usuariosRouter = require("./usuariosRouter");
const formRouter = require("./formularioRouter");
const productosRouter = require('./productosRouter');

// Uso de los routers en la API
router.use("/usuarios", usuariosRouter);
router.use("/formulario", formRouter);
router.use('/productos', productosRouter);






module.exports = router;
