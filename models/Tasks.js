var mongoose = require('mongoose')


var TasksSchema = new mongoose.Schema({
  profile:{type:mongoose.Schema.Types.Mixed, default:{}},
  title:{type:String, default: ''},
  category:{type:String,default:''},
  description:{type:String, default: ''},
  timestamp:{type:Date, default:Date.now}
})


TasksSchema.methods.summary=function(){
var summary = {
  profile: this.profile,
  title: this.title,
  description: this.description,
  category: this.category,
  timestamp: this.timestamp,
  id: this._id.toString()
}
return summary
}


module.exports = mongoose.model('TasksSchema', TasksSchema)
