const express = require('express');
const router = express.Router();
const {
    createProducto,
    getAllProductos,
    deleteProducto,
    updateProductos
} = require('../controllers/productoControllers');

router.post('/createProducto', createProducto);
router.get('/getAllProductos', getAllProductos);
router.delete('/deleteProducto/:idProducto', deleteProducto);
router.put('/updateProducto/:idProducto', updateProductos);

module.exports = router;