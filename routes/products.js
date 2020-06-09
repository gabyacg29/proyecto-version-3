var express = require('express');
var router = express.Router();
var productosController = require('../controllers/products');
var middles = require('../middleware/middles');


router.get('/', productosController.Todos); // funciona ok
router.get('/create', productosController.FormAlta); // funciona ok
router.get('/:id', productosController.Detalle); // Solo vista
router.post('/', middles.CargaProducto, productosController.Creando); // funciona ok
router.get('/:id/edit', productosController.FormEdicion); // solo vista
router.put('/:id', productosController.Editando); // 
router.delete('/:id', productosController.Eliminando);

module.exports = router;
