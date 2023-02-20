var express = require('express');
var router = express.Router();

/* GET todos listing. */
router.get('/', function (req, res, next) {
  res.render('todos');
});

module.exports = router;
