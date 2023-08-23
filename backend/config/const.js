const dbPass = process.env.DB_PASS;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const jwtSecret = process.env.JWT_SECRET; // Obtiene la clave secreta de las variables de entorno
module.exports = {
    dbPass,
    dbUser,
    dbName,
    jwtSecret
}