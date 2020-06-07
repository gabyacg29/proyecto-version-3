var express = require('express');
var router = express.Router();
var productosController = require('../controllers/products');
var middles = require('../middleware/middles');


router.get('/', productosController.Todos);
router.get('/create', productosController.FormAlta);
router.get('/:id', productosController.Detalle);
router.post('/', middles.CargaArchivo, productosController.Creando);
router.get('/:id/edit', productosController.FormEdicion);
router.put('/:id', productosController.Editando);
router.delete('/:id', productosController.Eliminando);

module.exports = router;
