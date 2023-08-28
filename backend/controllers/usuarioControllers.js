const usuarios = require('../models/usuariosModel')
const bcrypt = require('bcryptjs');

// Crear usuario nuevo
const createUsuario = async(req, res) =>{
    const {Correo, Nombre, Apellido, Telefono, Contrasena, Role} = req.body;
    
    //Hacemos una validacion de la obtencion de datos para la API
    if(!Correo || !Nombre || !Apellido || !Telefono || !Contrasena){
        return res.status(400).json({msg: 'Falto ingresar informacion'})
    }

    try {
        // Realizamos una validacion para verificar que no este registrado el correo
        const email = await usuarios.findOne({where: {Correo: Correo}});
            // Encriptacion de contrasena mediante hashing
            salt = bcrypt.genSaltSync();
        
        if(!email){
        await usuarios.create({
            Correo: Correo,
            Nombre: Nombre,
            Apellido: Apellido,
            Telefono: Telefono,
            Contrasena: bcrypt.hashSync(Contrasena, salt),
            Role: Role
        });
        res.status(200).json({msg: 'Usuario registrado con exito'})
        }
        else{
            res.status(400).json({msg: 'El correo ya esta registrado.'})
        }
    } catch (error) {
        res.status(400).json({msg: "Algo salio mal", error})
        console.log('error', {msg: error});
    }
}

// Consultar un usuario por su email
const findUsuario = async (req, res) => {
    // Definimos que vamos a recibir, como request, un Correo
    const { Correo } = req.params;
  
    try {
      if (!Correo) {
        return res.status(400).json({ msg: 'Correo no proporcionado' });
      }
  
      // Ocupando el método findOne de sequelize, buscamos por todos los usuarios 
      // el primer correo que cumpla con las características de nuestra request
      const usuario = await usuarios.findOne({ where: { Correo: Correo } });
  
      if (!usuario) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
      }
  
      res.status(200).json({ usuario: usuario });
    } catch (error) {
      res.status(400).json({ msg: 'Error al buscar usuario', error: error.message });
    }
  };

// Obtener todos los usuarios
const getAllUsuarios = async (req, res) => {
    try {
        const usuariosList = await usuarios.findAll();
        res.status(200).json({ usuarios: usuariosList });
    } catch (error) {
        res.status(400).json({ msg: 'Error al obtener usuarios', error: error.message });
    }
};

// Actualizar información de un usuario
const updateUsuario = async (req, res) => {
    // Recordar que req params se obtiene desde la ruta a la hora de hacer la consulta con la API
    const { Correo } = req.params;
    const { Nombre, Apellido, Telefono, Contrasena, Role } = req.body;

    try {
        const usuario = await usuarios.findOne({ where: { Correo: Correo } });
        if (!usuario) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }

        // Actualizar campos si se proporcionan en el body
        if (Nombre) usuario.Nombre = Nombre;
        if (Apellido) usuario.Apellido = Apellido;
        if (Telefono) usuario.Telefono = Telefono;
        if (Contrasena) {
            const salt = bcrypt.genSaltSync();
            usuario.Contrasena = bcrypt.hashSync(Contrasena, salt);
        }
        if (Role) usuario.Role = Role;
        //Validamos la instancia y, de ser valida, la gaurda en la DB
        await usuario.save();
        res.status(200).json({ msg: 'Usuario actualizado exitosamente' });
    } catch (error) {
        res.status(400).json({ msg: 'Error al actualizar usuario', error: error.message });
    }
};

// Borrar un usuario
const deleteUsuario = async (req, res) => {
    const { Correo } = req.params;

    try {
        const usuario = await usuarios.findOne({ where: { Correo: Correo } });
        if (!usuario) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }

        await usuario.destroy();
        res.status(200).json({ msg: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(400).json({ msg: 'Error al eliminar usuario', error: error.message });
    }
};

module.exports = {
    createUsuario,
    findUsuario,
    getAllUsuarios,
    updateUsuario,
    deleteUsuario
};