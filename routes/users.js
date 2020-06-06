var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

router.get('/login', usersController.FormIngreso);
router.post('/login', usersController.Ingreso);
router.get('/register', usersController.FormRegistro);
router.post('/register', usersController.Registrando);
router.get('/:id/edit', usersController.FormEdicion);
router.put('/:id', usersController.Editando);
router.get('/:id', usersController.Detalle);

module.exports = router;
