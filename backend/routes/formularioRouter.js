const express = require("express");
const router = express.Router();

const { sendForm, deleteForm } = require("../controllers/postFormControllers");

router.post("/sendform/", sendForm);
router.delete("/deleteform/:id", deleteForm);

module.exports = router;
