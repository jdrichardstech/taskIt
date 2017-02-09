import constants from '../constants'

var initialState = {


}


export default (state = initialState, action) => {

	let updated = Object.assign({}, state)

	switch (action.type){

		case constants.MESSAGES_RECEIVED:
	    var taskId = action.params.task
	    console.log("PAYLOAD" + JSON.stringify(action.payload))
	    updated[taskId] = action.payload
	    return updated
    default:
    	return state
  }
}
