var express = require('express');
var router = express.Router();
var controllers = require('../controllers')


router.post('/task', function(req, res, next) {


  console.log("TWILIO" + JSON.stringify(req.body))
    // res.render('home', { title: 'Express' })
});


router.get('/task', function(req, res, next) {
  res.json({
    confirmation:'success',
    message: 'It worked'
  })
});

module.exports = router;
