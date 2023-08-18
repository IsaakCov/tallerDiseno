const bcrypt = require('bcrypt');
const usuarios = require('../models/usuariosModel');

const login = async (req, res) => {
  const { Correo, Contrasena } = req.body;

  try {
    const usuario = await usuarios.findOne({ where: { Correo } });
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    if (bcrypt.compareSync(Contrasena, usuario.Contrasena)) {
      // Contraseña válida, inicia sesión exitosamente
      res.status(200).json({ msg: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ msg: 'Contraseña incorrecta' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor', error: error.message });
  }
};
// Generar el JWT para poder validar credenciales, enviamos el token como respuesta
// lo recibimos en el front, capturamos el token y lo recibimos desde el front para validar.


module.exports = {
  login
};