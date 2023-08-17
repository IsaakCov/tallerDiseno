const express = require('express');
const router = express.Router();
const {
    createProducto,
    getAllProductos,
    // deleteProducto,
    // updateProducto
} = require('../controllers/productoControllers');

router.post('/createProducto', createProducto);
router.get('/getAllProductos', getAllProductos);
// router.delete('/deleteProducto/:correo', deleteProducto);
// router.put('/updateProducto/:correo', updateProducto);

module.exports = router;