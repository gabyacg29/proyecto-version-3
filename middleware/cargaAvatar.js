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

function subir(req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      return res.redirect("/users/register");
    }
    next();
  });
}

module.exports = subir;
