var express = require("express");
var router = express.Router();
var usersController = require("../controllers/users");
var middles = require("../middleware/middles");

router.get("/login", usersController.FormIngreso);
router.post("/login", usersController.Ingreso);
router.get("/register", usersController.FormRegistro);
router.post("/register", middles.CargarAvatar, usersController.Registrando);
router.get("/:id/edit", usersController.FormEdicion);
router.put("/:id", usersController.Editando);
router.get("/:id", usersController.Detalle);

module.exports = router;
