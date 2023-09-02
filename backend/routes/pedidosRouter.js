const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const { 
    createPedido, 
    deletePedido, 
    updatePedido, 
    getPedidoById, 
    getAllPedidos, 
    getPedidosByUser,
    getLastPedidoByUser 
=======
const {
  createPedido,
  deletePedido,
  updatePedido,
  getPedidoById,
  getAllPedidos,
  postPedidos,
  getPedidosByUser,
>>>>>>> 89609b592f414a47f29cab9309b8daf73bf61c72
} = require("../controllers/pedidosController");

router.post("/createPedido", createPedido);
router.post("/postPedidos", postPedidos);

router.delete("/deletePedido/:idPedido", deletePedido);
router.put("/updatePedido/:idPedido", updatePedido);
router.get("/getPedidoById/:idPedido", getPedidoById);
router.get("/getAllPedidos", getAllPedidos);
router.get("/getPedidosByUser/:CorreoUsuario", getPedidosByUser);
<<<<<<< HEAD
router.get("/getLastPedidoByUser/:CorreoUsuario",getLastPedidoByUser);
module.exports = router;
=======
module.exports = router;
>>>>>>> 89609b592f414a47f29cab9309b8daf73bf61c72
