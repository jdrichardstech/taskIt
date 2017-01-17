var express = require('express');
var router = express.Router();
var controllers = require('../controllers')


router.post('/task', function(req, res, next) {
//
// TWILIO{"ToCountry":"US","ToState":"NY","SmsMessageSid":"SMa700bbe33455c9921df42656eca3cdc6","NumMedia":"0",
// "ToCity":"WHITE PLAINS","FromZip":"10010","SmsSid":"SMa700bbe33455c9921df42656eca3cdc6","FromState":"NY",
// "SmsStatus":"received","FromCity":"NEW YORK","Body":"party favors","FromCountry":"US",
// "To":"+19142186169","ToZip":"10604","NumSegments":"1","MessageSid":"SMa700bbe33455c9921df42656eca3cdc6",
// "AccountSid":"ACbef92078becdc5aa7f2fb3fde9bd7968","From":"+19173648790","ApiVersion":"2010-04-01"}

  console.log("TWILIO" + JSON.stringify(req.body))
  var message = req.body['Body']

  var task = {
    title:'Twilio Task',
    category:'delivery',
    description: message
  }
  var from = req.body['From']
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
