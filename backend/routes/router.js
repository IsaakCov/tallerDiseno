const express = require("express");
const router = express.Router();

// Importacion de los routers de cada controlador
const usuariosRouter = require("./usuariosRouter");
const formRouter = require("./formularioRouter");

// Uso de los routers en la API
router.use("/usuarios", usuariosRouter);
router.use("/formulario", formRouter);

module.exports = router;
