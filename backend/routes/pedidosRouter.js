const express = require("express");
const router = express.Router();

const { createPedido, deletePedido, updatePedido, getPedidoById, getAllPedidos } = require("../controllers/pedidosController");


router.post("/createPedido", createPedido);
router.delete("/deletePedido/:id", deletePedido);
router.put("/updatePedido/:id", updatePedido);
router.get("/getPeidoByID/:id", getPedidoById);
router.get("/getAllPedidos", getAllPedidos);
module.exports = router;