import constants from '../constants'
import { APIManager } from '../utils'


const getRequest = (path, params, actionType) => {

  return (dispatch) =>
    APIManager.get(path, params)
      .then((response)=>{
        const payload= response.results || response.result || response.user
        //  console.log('Response getRequest params: ' + JSON.stringify(params))
        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        // console.log('ACTION GET' + JSON.stringify(payload))
        return response
      })
      .catch((err)=>{
        throw err
      })

}

const postRequest = (path, params, actionType) => {

  return (dispatch) =>
    APIManager.post(path, params)
      .then((response)=>{
        const payload= response.results || response.result || response.user
        // console.log('Response getRequest: ' + JSON.stringify(response))
        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response
      })
      .catch((err)=>{
        throw err
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
  fetchMessages:(params) => {
    console.log("HI ACTIONS")
    return(dispatch)=>{
      return dispatch(getRequest('/api/message', params, constants.MESSAGES_RECEIVED))
    }
  },

  fetchProfile: (path, params) => {
  return (dispatch) => {
    return dispatch(getRequest(path, params, constants.PROFILE_RECEIVED))
    }
  },

  submitMessage: (params) => {
    // console.log('submitClaim ACTIONS')
    return (dispatch) => {
      return dispatch(postRequest('/api/message', params, constants.MESSAGE_CREATED))
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
  },

  register: (credentials)=>{
    return(dispatch) => {
      return dispatch(postRequest('/account/register', credentials, constants.PROFILE_CREATED))
    }
  },

  login: (credentials)=>{
    return(dispatch) => {
      return dispatch(postRequest('/account/login', credentials, constants.USER_LOGGED_IN))
    }
  },

  checkCurrentUser: () => {
  return (dispatch) => {
    return dispatch(getRequest('/account/currentuser', {}, constants.USER_LOGGED_IN))
  }
},

logout:()=>{
  return(dispatch)=>{
    return dispatch(getRequest('/account/logout', {}, constants.USER_LOGGED_IN))
  }
},
notify:(params) => {
  return(dispatch) => {
    return dispatch(postRequest('/twilio/notify', params, null))
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
