var mongoose = require('mongoose')

var TasksSchemas = new mongoose.Schema({
  profile:{type:mongoose.Schema.Types.Mixed, default:{}},
  title:{type:String, default: ''},
  category:{type:String,default:''},
  description:{type:String, default: ''},
  timestamp:{type:Date, default:Date.now}
})

TasksSchemas.methods.summary=function(){
var summary = {
  profile: this.profile,
  title: this.title,
  category: this.category,
  description: this.description,
  timestamp: this.timestamp,
  id: this._id.toString()
}
return summary
}

module.exports = mongoose.model('TasksSchemas', TasksSchemas)
