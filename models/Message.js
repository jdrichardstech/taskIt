var mongoose = require('mongoose')


var MessageSchema = new mongoose.Schema({
  profile:{type:mongoose.Schema.Types.Mixed, default:{}},
  text:{type:String, default:''},
  task:{type:String, default:''},
  timestamp:{type:Date, default:Date.now}
})


MessageSchema.methods.summary=function(){
var summary = {
  profile: this.profile,
  text:this.text,
  task:this.task,
  timestamp: this.timestamp,
  id: this._id.toString()
}
return summary
}


module.exports = mongoose.model('MessageSchema', MessageSchema)
