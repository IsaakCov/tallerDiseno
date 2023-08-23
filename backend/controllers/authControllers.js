const bcrypt = require('bcryptjs');
const usuarios = require('../models/usuariosModel');
//const jwt = require('jsonwebtoken');
const credentials = require('../config/const');
const generarJWT = require('../services/generatejwt')

const login = async (req, res) => {
  const { Correo, Contrasena } = req.body;

  try {
    const usuario = await usuarios.findOne({ where: { Correo } });
    if (!usuario) {
      console.log('DieguitoFeliz');
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }
    const validarContrasena = bcrypt.compareSync(Contrasena, usuario.Contrasena);
    console.log(validarContrasena);
    if (!validarContrasena) {
      console.log('DieguitoTriste');
      return res.status(404).json({ msg: 'Contraseña incorrecta' });
      // Contraseña válida, inicia sesión exitosamente
      //Sign crea el token /payload para encriptar / Secuencia de caracteres para generar el token
    } 
    const token = await generarJWT(Correo)
      console.log(token);
      res.status(200).json({ msg: 'Inicio de sesión exitoso', token, Correo: usuario.Correo});
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor', error: error.message });
  }
};

module.exports = {
  login
};


// Generar el JWT para poder validar credenciales, enviamos el token como respuesta
// lo recibimos en el front, capturamos el token y lo recibimos desde el front para validar.