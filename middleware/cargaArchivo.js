var multer = require("multer");
var fs = require("fs");

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      fs.mkdir("../public/img/productos", function (err) {
        if (err) {
          console.log(err.stack);
        } else {
          callback(null, "./public/img/productos");
        }
      });
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "-" + Date.now());
    },
  });

function subir (req, res, next){
    var imagen = multer({ storage : storage}).single('userFile');
    upload(req,res,function(err) {
        if(err) {
            return res.redirect("/products/create");
        }
        next();
    });
};

module.exports = subir;