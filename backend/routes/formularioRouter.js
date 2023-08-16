const express = require("express");
const router = express.Router();

const { sendForm, deleteForm } = require("../controllers/postFormControllers");

router.post("/sendform", sendForm);
router.delete("/deleteform/:id", deleteForm);

module.exports = router;

// http://localhost:3001/api/v1/formulario/sendform
// http://localhost:3001/api/v1/formulario/deleteform/:id
// http://localhost:3001/api/v1/usuarios/createUsuario
