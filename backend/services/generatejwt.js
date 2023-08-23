const jwt = require('jsonwebtoken');
const credentials = require('../config/const');
const generarJWT = (CorreoUser = "") => {
    return new Promise((resolve, reject) => {
      const payload = { CorreoUser };
  
      jwt.sign(
        payload,
        credentials.jwtSecret,
        {
          expiresIn: "4h",
        },
        (err, token) => {
          if (err) {
            console.log(err);
            reject("No se pudo generar el token");
          } else {
            resolve(token);
          }
        }
      );
    });
  };
  module.exports = generarJWT;
