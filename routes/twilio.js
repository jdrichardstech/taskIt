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

  //Title.Category. task description

  var validCategories = ['delivery', 'house cleaning', 'dog walking', 'misc']
  var parts = message.split('.') // hopefully 3 parts
  var category = (parts.length ==1) ? 'misc': parts[1].trim().toLowerCase()
  var description
  if(validCategories.indexOf(category) == -1){
    category='misc'
    description = parts[1].trim()
  }else{
    description = (parts.length < 3) ? '' : parts[2].trim()
  }





  var task = {
    title:parts[0],
    category: category,
    description: description
  }
  var from = req.body['From'].replace('+1', '')


  controllers.profile.get({phone:from}, false)
  .then(function(profiles){
    if(profiles.length==0){
      throw new Error('Go Away')
    }
    var profile = profiles[0]
    task['profile'] = {
      id: profile.id,
      username: profile.username
    }
    return controllers.task.post(task, false)

  })
  .then(function(result){
    console.log("Success: "+ JSON.stringify(result))
    res.send("Hello")
  })
  .catch(function(err){
    console.log("Error: " + err.message)
  })

})




router.get('/task', function(req, res, next) {
  res.json({
    confirmation:'success',
    message: 'It worked'
  })
});

module.exports = router;
