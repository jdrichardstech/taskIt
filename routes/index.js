var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
    // res.render('home', { title: 'Express' })
});
router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource
  res.json({
    confirmation:'success',
    resource: resource
  })
});

module.exports = router;
