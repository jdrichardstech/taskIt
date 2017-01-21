var twilio = require('twilio')



module.exports = {
  sendSMS: function(recipient, message){
    return new Promise(function(resolve, reject){
      if(recipient.indexOf('+1')==-1)
      recipient = '+1'+recipient

      var client = new twilio.RestClient('ACbef92078becdc5aa7f2fb3fde9bd7968', '0c2e4c7bbf814ef1bf7d00b1285ce4c0')


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
