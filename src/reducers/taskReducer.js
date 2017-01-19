import constants from '../constants'


var initialState={

  selectedCategory:'delivery',
  selected:0,
  categories:[
    'delivery',
    'dog walking',
    'house cleaning',
    'misc'
  ]
}


export default(state=initialState, action)=>{
  let updated = Object.assign({}, state)

  switch(action.type){
    case constants.CATEGORY_SELECTED:
    updated['selectedCategory']= action.payload

    console.log('CATEGORY_SELECTED: '+JSON.stringify(action.payload))
    return updated

    case constants.TASKS_RECEIVED:

    const keys = Object.keys(action.params)
    keys.forEach((key, i)=>{
      const value = action.params[key]//delivery, dog walking...etc
      updated[value]=action.payload
    })

    action.payload.forEach((task, i)=>{
      updated[task.id]=task
    })
    console.log('TASKS_RECEIVED:' + JSON.stringify(updated))
      return updated


    // console.log('UPDATED IN REDUCER:' + JSON.stringify(updated['all']))


    case constants.TASK_CREATED:
    console.log('TASKS_RECEIVED' + JSON.stringify(action.payload))
    let currentTasks = (updated[action.payload.category]) ? Object.assign([], updated[action.payload.category]) : []
    currentTasks.unshift(action.payload)
    updated[action.payload.category] = currentTasks
    return updated

    default:
    return state
  }
}
