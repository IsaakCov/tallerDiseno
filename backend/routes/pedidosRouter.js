const express = require("express");
const router = express.Router();

const { createPedido, deletePedido, updatePedido } = require("../controllers/pedidosController");


router.post("/createPedido", createPedido);
router.delete("/deletePedido/:id", deletePedido);
router.put("/updatePedido/:id", updatePedido);
module.exports = router;