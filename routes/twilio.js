var express = require('express');
var router = express.Router();


router.post('/task', function(req, res, next) {
  res.render('task', null)
  res.send("hello")
    // res.render('home', { title: 'Express' })
});


router.get('/task', function(req, res, next) {
  res.json({
    confirmation:'success',
    message: 'It worked'
  })
});

module.exports = router;
