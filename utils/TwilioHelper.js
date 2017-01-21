var twilio = require('twilio')



module.exports = {
  sendSMS: function(recipient, message){
    return new Promise(function(resolve, reject){
      if(recipient.indexOf('+1')==-1)
      recipient = '+1'+recipient

      var client = new twilio.RestClient(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);


      client.messages.create({
        body:message,
        // to:+19173648790,
        to: recipient,
        from:process.env.TWILIO_FROM

      }, function(err, message){
        if(err){
          reject(err.message)
          return
        }
          resolve(message)
        })
      })
    }
}
