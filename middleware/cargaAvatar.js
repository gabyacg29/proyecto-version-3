const path = require("path");
const mime = require("mime");
const Multer = require("multer");

var CargandoAvatar = Multer({
  storage: Multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname, "../public/img/avatar"));
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "-" + Date.now());
    },
  }),
}).single("avatar");

module.exports = CargandoAvatar;
