import constants from '../constants'

var initialState = {
	selectedCategory: 'delivery',
	categories: [
		'delivery',
		'dog walking',
		'house cleaning',
		'misc'
	]
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type){
		case constants.TASKS_RECEIVED:

			const keys = Object.keys(action.params)
			// console.log("KEYS: " + JSON.stringify(keys))
			keys.forEach((key, i) => {
				const value = action.params[key] // delivery, dog walking...
				updated[value] = action.payload
			})
			console.log("UPDATED TASK REDUCER: " + JSON.stringify(updated))
			action.payload.forEach((task, i) => {
				updated[task.id] = task
			})

			return updated
		case constants.TASK_CREATED:
			let currentTasks = (updated[action.payload.category]) ? Object.assign([], updated[action.payload.category]) : []
			currentTasks.unshift(action.payload)
			updated[action.payload.category] = currentTasks
			return updated
		case constants.CATEGORY_SELECTED:
			updated['selectedCategory'] = action.payload
			return updated
		default:
			return state
	}
}
