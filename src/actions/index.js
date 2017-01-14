import constants from '../constants'
import { APIManager } from '../utils'


const getRequest = (path, params, actionType) => {

  return (dispatch) =>
    APIManager.get(path, params)
      .then((response)=>{
        const payload= response.results || response.result
        // console.log('Response getRequest: ' + JSON.stringify(response))
        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
      })
      .catch((err)=>{
        console.log("Error" + JSON.stringify(err))
      })

}

const postRequest = (path, params, actionType) => {

  return (dispatch) =>
    APIManager.post(path, params)
      .then((response)=>{
        const payload= response.results || response.result
        console.log('Response getRequest: ' + JSON.stringify(response))
        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
      })
      .catch((err)=>{
        console.log("Error" + JSON.stringify(err))
      })

}



export default{
  fetchTasks: (params) =>{
    return (dispatch) => {
      return dispatch(getRequest('/api/task', params, constants.TASKS_RECEIVED))
    }
  },

  tasksReceived: (tasks)=>{
    return{
      type: constants.TASKS_RECEIVED,
      payload: tasks
    }
  },

  submitTask: (params) =>{
    return (dispatch) => {
      return dispatch(postRequest('/api/task', params, constants.TASK_CREATED))
    }
  },


  selectCategory: (category)=>{
    return{
      type: constants.CATEGORY_SELECTED,
      payload: category
    }
  }

  // taskCreated: (task) =>{
  //   return{
  //     type: constants.TASK_CREATED,
  //     payload:task
  //   }
  //
  // }

}
