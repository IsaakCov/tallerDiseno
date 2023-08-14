const router = require('express').Router();

const{createUsuario} = require('../controllers/usuarioControllers');

//Anadimos las rutas segun las vayamos creando
// Creacion de nuevos usuarios
router.post("/createusuario", createUsuario);


module.exports = router;