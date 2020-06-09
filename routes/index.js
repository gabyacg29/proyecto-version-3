var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let user = {
    Categoria: "null",
  };
  if (req.session.user) {
    user = req.session.user;
  }
  let data = {
    Formulario: "Home",
    User: user,
  };
  res.render("index", { data: data });
});

module.exports = router;
