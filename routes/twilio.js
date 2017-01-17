var express = require('express');
var router = express.Router();
var controllers = require('../controllers')


router.post('/task', function(req, res, next) {


  console.log("TWILIO" + JSON.stringify(req.body))
  var message = req.body['Body']
  var task = {
    title:'Twilio Task',
    category:'delivery',
    description: message
  }
  controllers.task.post(task, false)
  .then(function(result){
    console.log("Success: "+ JSON.stringify(result))
    res.send("Hello")
  })
  .catch(function(err){
    console.log("Error: " + err)
  })

});


router.get('/task', function(req, res, next) {
  res.json({
    confirmation:'success',
    message: 'It worked'
  })
});

module.exports = router;
