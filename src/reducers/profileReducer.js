import constants from '../constants'


var initialState={

}

export default (state=initialState, action)=>{
  let updated = Object.assign({}, initialState)

  switch(action.type){
    case constants.PROFILE_RECEIVED:
      console.log("PROFILE REDUCER:" + JSON.stringify(action.payload))
      let profile = action.payload
      updated[profile.id] = profile
      console.log("PROFILE REDUCER UPDATED: " + JSON.stringify(updated[profile.id]))
      return updated
    default:
      return state
  }
}
