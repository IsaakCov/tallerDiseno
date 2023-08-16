const formularioDeConsultas = require("../models/formularioModel");
const usuariosModel = require("../models/usuariosModel");

//Función para requerir los datos
const sendForm = async (req, res) => {
  //Parametros que consultaremos en el body del JSON
  const { CorreoUsuario, Asunto, Comentario } = req.body;

  //Verificar que esten los campos
  if (!CorreoUsuario || !Asunto || !Comentario)
    return res.status(200).json({ msg: "Todos los campos son requeridos" });

  try {
    //Buscar si hay un email registrado en la base de datos
    const email = await usuariosModel.findOne({
      where: { Correo: CorreoUsuario },
    });
    //Verificar si el email está registrado
    if (!email) {
      res.status(400).json({ msg: "El Correo no está registrado" });
    } else {
      //Objeto que requerira en el body (creo asjkdjkasd)
      const consulta = {
        CorreoUsuario: CorreoUsuario,
        Asunto: Asunto,
        Comentario: Comentario,
      };
      //Creará el formulario en la base de datos si todo esta bien
      await formularioDeConsultas.create(consulta);
      res.status(200).json({ msg: "Consulta realizada" });
    }
  } catch (error) {
    //Nos informará el error en caso de que exista
    res.status(400).json({ msg: "La consultado no se ha podido hacer" });
    console.log("Error", { msg: error });
  }
};

//ELIMINAR FORMULARIO
//Se requirer la id en los parametros
const deleteForm = async (req, res) => {
  const idFormulario = req.params.id;

  //Busca si existe la id y se almacena en la const formId en forma de array con todos los formularios
  const formId = await formularioDeConsultas.findAll({
    where: { idConsulta: idFormulario },
  });
  try {
    //verifica si la longitud de ese array es igual a 1 utilizando
    //formId.length === 1 . Esto significa que solo se encontró un formulario con la ID especificada.
    if (formId.length === 1) {
      await formularioDeConsultas.destroy({
        where: { idConsulta: idFormulario },
      });
      res.status(200).json({ msg: "Registro borrado correctamente" });
    } else {
      res
        .status(400)
        .json({
          msg: "El usuario que intenta eliminar no existe",
          error: error.message,
        });
      console.log("El suuario que intenta eliminar no existe");
    }
  } catch (error) {
    console.log(error);
  }
  //Si la id existe se eliminará
};

module.exports = { sendForm, deleteForm };
