const Pedido = require('../models/pedidosModel');
const ProductoPedido = require('../models/pedidoProductosModel');
const Usuario = require('../models/usuariosModel');
const Producto = require('../models/productoModel');
//const {transporter} = require('../app/app');

const createPedido = async (req, res) => {
  try {
    const { CorreoUsuario, DireccionEnvio, productos } = req.body;

    // Verifica si el usuario existe
    const usuario = await Usuario.findOne({ where: { Correo: CorreoUsuario } });
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    // Crea un nuevo pedido
    const pedido = await Pedido.create({
      CorreoUsuario,
      DireccionEnvio,
      TotalPedido: 0,
    });

    // Inicializa el total del pedido en 0
    let totalPedido = 0;

    // Agrega los productos al pedido a través de ProductoPedido
    for (const productoInfo of productos) {
      const { idProducto, cantidad } = productoInfo;

      // Verifica si el producto existe
      const producto = await Producto.findByPk(idProducto);
      if (!producto) {
        return res
          .status(404)
          .json({ msg: `Producto con ID ${idProducto} no encontrado` });
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

    // Envía el correo de confirmación usando el transporter
    /*const mailOptions = {
      from: transporter.options.auth.user, // Usa el remitente del transporter
      to: 'Correo personal de Michelle', // Ingresar el correo de Michelle y, quizas, el del cliente
      subject: 'Nuevo pedido ingresado',
      text: `¡El nuevo pedido con ID ${pedido.id}, de parte de ${CorreoUsuario} ha sido creado exitosamente en Taller Diseño! Total: $${totalPedido}`,
    };

    await transporter.sendMail(mailOptions);
    */

    return res.status(201).json({ msg: "Pedido creado con éxito", pedido });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error en el servidor", error: error.message });
  }
};

const deletePedido = async (req, res) => {
  try {
    const { idPedido } = req.params;

    // Verifica si el pedido existe
    const pedido = await Pedido.findByPk(idPedido);
    if (!pedido) {
      return res.status(404).json({ msg: "Pedido no encontrado" });
    }

    // Elimina el pedido de la base de datos
    await pedido.destroy();

    return res.status(200).json({ msg: "Pedido eliminado con éxito" });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error en el servidor", error: error.message });
  }
};

const updatePedido = async (req, res) => {
  try {
    const { idPedido } = req.params; // Obtén el ID del pedido de los parámetros de la URL
    const { nuevoEstado } = req.body; // Obtén el nuevo estado del pedido del cuerpo de la solicitud (en formato JSON)

    // Verifica si el pedido existe
    const pedido = await Pedido.findByPk(idPedido);
    if (!pedido) {
      return res.status(404).json({ msg: "Pedido no encontrado" });
    }

    // Actualiza el estado del pedido
    await pedido.update({ Estado: nuevoEstado });

    return res
      .status(200)
      .json({ msg: "Estado del pedido actualizado con éxito", pedido });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error en el servidor", error: error.message });
  }
};
const getPedidoById = async (req, res) => {
  try {
    const { idPedido } = req.params; // Obtén el ID del pedido de los parámetros de la URL
    console.log(idPedido);

    // Busca el pedido por su ID
    const pedido = await Pedido.findByPk(idPedido);
    console.log(pedido);

    if (!pedido) {
      return res.status(404).json({ msg: "Pedido no encontrado" });
    }

    return res.status(200).json({ pedido });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error en el servidor", error: error.message });
  }
};
const getAllPedidos = async (req, res) => {
  try {
    // Busca todos los pedidos en la base de datos
    const pedidos = await Pedido.findAll();

    return res.status(200).json({ pedidos });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error en el servidor", error: error.message });
  }
};

// Controlador para obtener todos los pedidos de un usuario
const getPedidosByUser = async (req, res) => {
  try {
    const { CorreoUsuario } = req.params;

    // Verifica si el usuario existe
    const usuario = await Usuario.findOne({ where: { Correo: CorreoUsuario } });
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    // Busca todos los pedidos asociados al usuario por su dirección de correo electrónico
    const pedidos = await Pedido.findAll({ where: { CorreoUsuario } });

    res.status(200).json({ pedidos });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error en el servidor", error: error.message });
  }
};

//CREAR DIRECCION DE PEDIDO

const postPedidos = async (req, res) => {
  const {
    CorreoUsuario,
    DireccionEnvio,
    Depto,
    Region,
    Comuna,
    Instrucciones,
    TotalPedido,
  } = req.body;

  //Hacemos una validacion de la obtencion de datos para la API
  if (!CorreoUsuario) {
    return res
      .status(400)
      .json({ msg: "Falta ingresar el correo del usuario" });
  }

  if (!DireccionEnvio) {
    return res
      .status(400)
      .json({ msg: "Falta ingresar la dirección de envío" });
  }

  if (!Depto) {
    return res
      .status(400)
      .json({ msg: "Falta ingresar el número de departamento/casa/oficina" });
  }

  if (!Region) {
    return res.status(400).json({ msg: "Falta seleccionar la región" });
  }

  if (!Comuna) {
    return res.status(400).json({ msg: "Falta ingresar la comuna" });
  }

  if (!Instrucciones) {
    return res
      .status(400)
      .json({ msg: "Falta ingresar las instrucciones de entrega" });
  }

  try {
    const email = await Usuario.findOne({
      where: { Correo: CorreoUsuario },
    });

    if (!email) {
      res.status(400).json({ msg: "El Correo no está registrado" });
    } else {
      await Pedido.create({
        CorreoUsuario: CorreoUsuario,
        DireccionEnvio: DireccionEnvio,
        Depto: Depto,
        Region: Region,
        Comuna: Comuna,
        Instrucciones: Instrucciones,
        TotalPedido: TotalPedido,
      });
      res.status(200).json({ msg: "Usuario registrado con exito" });
    }
  } catch (error) {
    res.status(400).json({ msg: "Algo salio mal", error });
    console.log("error", error);
  }
};
const getLastPedidoByUser = async (req, res) => {
  try {
    const { CorreoUsuario } = req.params;

    // Verifica si el usuario existe
    const usuario = await Usuario.findOne({ where: { Correo: CorreoUsuario } });
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    // Busca el último pedido asociado al usuario por su dirección de correo electrónico
    const lastPedido = await Pedido.findOne({
      where: { CorreoUsuario },
      order: [['createdAt', 'DESC']], // Ordena por fecha de creación en orden descendente
    });

    if (!lastPedido) {
      return res.status(404).json({ msg: 'Usuario no tiene pedidos' });
    }

    res.status(200).json({ lastPedido });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error en el servidor", error: error.message });
  }
};

module.exports = {
  createPedido,
  deletePedido,
  updatePedido,
  getPedidoById,
  getAllPedidos,
  getPedidosByUser,
  getLastPedidoByUser,
  postPedidos,
};
