const express = require('express');
const router = express.Router();
const {
    createUsuario,
    findUsuario,
    getAllUsuarios,
    deleteUsuario,
    updateUsuario
} = require('../controllers/usuarioControllers');
const { login } = require('../controllers/authControllers');

// Router de las funciones exclusivas del usuario /usuario...
router.post('/createUsuario', createUsuario);
router.get('/findUsuario/:correo', findUsuario);
router.get('/getAllUsuarios', getAllUsuarios);
router.delete('/deleteUsuario/:correo', deleteUsuario);
router.put('/updateUsuario/:correo', updateUsuario);
router.post('/login', login);

module.exports = router;