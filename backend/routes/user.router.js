const router = require('express').Router();

const{createUsuario} = require('../controllers/usuarioControllers');

//Anadimos las rutas segun las vayamos creando
//
router.post("/createusuario", createUsuario);


module.exports = router;