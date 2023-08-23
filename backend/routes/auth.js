const express = require('express');
const router = express.Router();
const { checkAuthenticated, checkRole } = require('../middleware/auth');
const UserController = require('../controllers/UserController');

router.get('/user-role', checkAuthenticated, UserController.getUserRole);
router.get('/admin-route', checkAuthenticated, checkRole('admin'), (req, res) => {
  // Esta ruta solo estará disponible para usuarios con el rol 'admin'
  res.json({ message: 'Ruta solo para administradores.' });
});

module.exports = router;