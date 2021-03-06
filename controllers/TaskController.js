var Tasks = require('../models/Tasks')
var Promise = require('bluebird')

module.exports = {
  get: function(params, isRaw){
    return new Promise(function(resolve, reject){
      var filters={
        sort: {timestamp: -1}
      }
      Tasks.find(params, null, filters, function(err, tasks){
          if(err){
            reject(err)
            return
          }
          if(isRaw){
              resolve(tasks)
          }else{
            var list=[]
            tasks.forEach(function(task, i){
              list.push(task.summary())
            })
            resolve(list)
          }
      })
    })
  },

  getById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Tasks.findById(id, function(err, task){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(task)
        }else{
          resolve(task.summary())
        }

      })
    })
  },

  post:function(params, isRaw){
    return new Promise(function(resolve, reject){
      Tasks.create(params, function(err, task){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(task)
        }else{
          resolve(task.summary())
        }
      })
    })
  }
}
