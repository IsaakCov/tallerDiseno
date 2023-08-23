const jwt = require('jsonwebtoken');

// Middleware para verificar si el usuario está autenticado
const checkAuthenticated = (req, res, next) => {
const token = req.headers.authorization;

if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
}

try {
    const decodedToken = jwt.verify(token, 'tu_secreto_secreto'); // Cambia esto por tu secreto
    req.user = decodedToken.user;
    next();
} catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
}
};

// Middleware para verificar el rol del usuario
const checkRole = (requiredRole) => {
return (req, res, next) => {
    if (req.user.role === requiredRole) {
    next();
    } else {
    return res.status(403).json({ message: 'No tienes permiso para realizar esta acción.' });
    }
};
};

module.exports = { checkAuthenticated, checkRole };