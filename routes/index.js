var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sam Vredenburgh', subtitle: "Welcome to my website.",  description: "This is currently under construction, sorry for the mess." });
});

module.exports = router;
