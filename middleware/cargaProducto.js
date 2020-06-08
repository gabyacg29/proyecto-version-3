const path = require("path");
const mime = require("mime");
const Multer = require("multer");

var CargandoProducto = Multer({
  storage: Multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname, "../public/img/productos"));
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "-" + Date.now());
    },
  }),
}).single("producto");

module.exports = CargandoProducto;