const express = require('express');
const router = express.Router();
const {
    createUsuario,
    findUsuario,
    getAllUsuarios,
    deleteUsuario,
    updateUsuario
} = require('../controllers/usuarioControllers');

router.post('/createUsuario', createUsuario);
router.get('/findUsuario/:correo', findUsuario);
router.get('/getAllUsuarios', getAllUsuarios);
router.delete('/deleteUsuario/:correo', deleteUsuario);
router.put('/updateUsuario/:correo', updateUsuario);

module.exports = router;