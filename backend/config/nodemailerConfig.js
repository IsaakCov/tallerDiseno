const nodemailer = require('nodemailer');

// Configuración del transporte para Gmail (puedes ajustarla según tu proveedor de correo)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'tu_correo@gmail.com',
    pass: 'tu_contraseña_de_aplicación_específica', // Debes usar la contraseña de aplicación específica que generaste en tu cuenta de Google
  },
});

// Función para enviar un correo electrónico
const enviarCorreo = async (destinatario, asunto, contenido) => {
  try {
    const info = await transporter.sendMail({
      from: 'tu_correo@gmail.com',
      to: destinatario,
      subject: asunto,
      text: contenido,
    });
    console.log('Correo electrónico enviado:', info.response);
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
};

module.exports = {
  enviarCorreo,
};