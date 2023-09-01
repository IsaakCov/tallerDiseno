const express = require("express");
const router = express.Router();

const { 
    createPedido, 
    deletePedido, 
    updatePedido, 
    getPedidoById, 
    getAllPedidos, 
    getPedidosByUser,
    getLastPedidoByUser 
} = require("../controllers/pedidosController");


router.post("/createPedido", createPedido);
router.delete("/deletePedido/:idPedido", deletePedido);
router.put("/updatePedido/:idPedido", updatePedido);
router.get("/getPedidoById/:idPedido", getPedidoById);
router.get("/getAllPedidos", getAllPedidos);
router.get("/getPedidosByUser/:CorreoUsuario", getPedidosByUser);
router.get("/getLastPedidoByUser/:CorreoUsuario",getLastPedidoByUser);
module.exports = router;