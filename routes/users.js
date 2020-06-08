var express = require("express");
var router = express.Router();
var usersController = require("../controllers/users");
var middles = require("../middleware/middles");
var multer = require("multer");
var fs = require("fs");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    fs.mkdir("img/avatar", function (err) {
      if (err) {
        console.log(err.stack);
      } else {
        callback(null, "img/avatar");
      }
    });
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "-" + Date.now());
  },
});
var upload = multer({ storage: storage }).single("image");

router.get("/login", usersController.FormIngreso);
router.post("/login", usersController.Ingreso);
router.get("/register", usersController.FormRegistro);
router.post("/register", usersController.Registrando);
router.get("/:id/edit", usersController.FormEdicion);
router.put("/:id", usersController.Editando);
router.get("/:id", usersController.Detalle);

module.exports = router;
