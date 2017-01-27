import constants from '../constants'



var initialState={
  user:null,
  taskResponder:null
}


export default (state=initialState, action)=>{
  let updated = Object.assign({}, state)
  switch(action.type){
    case constants.PROFILE_RECEIVED:
    console.log("ACTION PAYLOAD:" + JSON.stringify(action.payload))
    // updated['user'] = action.payload
    updated['taskResponder'] = action.payload
    console.log("TASKRESPONDER REDUCER: "+ JSON.stringify(updated))
    return updated
    case constants.PROFILE_CREATED:
    // console.log("PROFILE_CREATED: " + JSON.stringify(action.payload))
    updated['user']= action.payload
    return updated
    case constants.USER_LOGGED_IN:
   console.log("USER_LOGGED_IN: " + JSON.stringify(action.payload))
    updated['user']= action.payload
    return updated
    default:
    return state
  }
}
