var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let productos = [];
  res.render('index', { productos: productos });
});

module.exports = router;
