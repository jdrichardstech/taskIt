import constants from '../constants'


var initialState={

}

export default (state=initialState, action)=>{
  let updated = Object.assign({}, state)
  case constants.PROFILE_RECEIVED:
  console.log("PROFILE_RECEIVED:" + JSON.stringify(action.payload))

  let profile = action.payload
  updated[profile.id] = profile

  // updated['user'] = action.payload
  // updated['profile'] = action.payload
  // console.log("TASKRESPONDER REDUCER: "+ JSON.stringify(updated))
  return updated
  default:
  return state
}
