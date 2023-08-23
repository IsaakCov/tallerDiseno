const Pedido = require('../models/pedidosModel');
const ProductoPedido = require('../models/pedidoProductosModel');
const Usuario = require('../models/usuariosModel');
const Producto = require('../models/productoModel');

const createPedido = async (req, res) => {
  try {
    const { CorreoUsuario, DireccionEnvio, productos } = req.body;

    // Verifica si el usuario existe
    const usuario = await Usuario.findOne({ where: { Correo: CorreoUsuario } });
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    // Crea un nuevo pedido
    const pedido = await Pedido.create({ CorreoUsuario, DireccionEnvio, TotalPedido: 0 });

    // Inicializa el total del pedido en 0
    let totalPedido = 0;

    // Agrega los productos al pedido a través de ProductoPedido
    for (const productoInfo of productos) {
      const { idProducto, cantidad } = productoInfo;

      // Verifica si el producto existe
      const producto = await Producto.findByPk(idProducto);
      if (!producto) {
        return res.status(404).json({ msg: `Producto con ID ${idProducto} no encontrado` });
      }

      // Calcula el precio total de ese producto en el pedido
      const precioTotalProducto = producto.Precio * cantidad;

      // Crea una entrada en ProductoPedido para este producto en el pedido
      await ProductoPedido.create({
        PedidoId: pedido.id,
        ProductoId: idProducto,
        cantidad,
        precio: precioTotalProducto,
      });

      // Actualiza el total del pedido
      totalPedido += precioTotalProducto;
    }

    // Actualiza el total del pedido en el registro de Pedido
    await pedido.update({ TotalPedido: totalPedido });

    return res.status(201).json({ msg: 'Pedido creado con éxito', pedido });
  } catch (error) {
    return res.status(500).json({ msg: 'Error en el servidor', error: error.message });
  }
};

const deletePedido = async (req, res) => {
    try {
      const { idPedido } = req.params;
  
      // Verifica si el pedido existe
      const pedido = await Pedido.findByPk(idPedido);
      if (!pedido) {
        return res.status(404).json({ msg: 'Pedido no encontrado' });
      }
  
      // Elimina el pedido de la base de datos
      await pedido.destroy();
  
      return res.status(200).json({ msg: 'Pedido eliminado con éxito' });
    } catch (error) {
      return res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
  };

  const updatePedido = async (req, res) => {
    try {
      const { idPedido } = req.params; // Obtén el ID del pedido de los parámetros de la URL
      const { nuevoEstado } = req.body; // Obtén el nuevo estado del pedido del cuerpo de la solicitud (en formato JSON)
  
      // Verifica si el pedido existe
      const pedido = await Pedido.findByPk(idPedido);
      if (!pedido) {
        return res.status(404).json({ msg: 'Pedido no encontrado' });
      }
  
      // Actualiza el estado del pedido
      await pedido.update({ Estado: nuevoEstado });
  
      return res.status(200).json({ msg: 'Estado del pedido actualizado con éxito', pedido });
    } catch (error) {
      return res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
  };
  
module.exports = {
  createPedido,
  deletePedido,
  updatePedido
};