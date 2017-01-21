import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
 import { ClaimTask } from '../view'
import actions from '../../actions'



class Task extends Component {
  componentDidMount(){
console.log("PROPS: "+ JSON.stringify(this.props))


  }


  submitMessage(message){
    // console.log("CLAIM: " + JSON.stringify(reply))
    let updated = Object.assign({}, message)
    const user = this.props.account.user
    updated['profile'] = {
      id: user.id,
      username: user.username
    }

    updated['task']= this.props.params.id

    const taskId = this.props.params.id
    const task = this.props.tasks[taskId]

    this.props.submitMessage(updated)
    .then(response=>{
      console.log("MESSAGE CREATED: " + JSON.stringify(response))

    return  this.props.notify({
        recipient: task.profile.id,
        text: 'Hello from react. Good job'
      })
    })
    .then(response=>{
        alert("Thanks for replying! Good Luck!")
    })
    .catch(err=> {
      console.log("ERROR: "+ err)
    })
  }

  render(){
    const taskId = this.props.params.id
    const task = this.props.tasks[taskId]
    return(
      <div>
        <h2>Hi {task.profile.username}</h2>
        Title:{task.title}<br /> Description: {task.description}<br /> Category: {task.category}
        <br />

      {(this.props.account.user == null) ? <h3>Please login or register to reply </h3>:
      <div>
        <ClaimTask onSubmit={this.submitMessage.bind(this)} />

      </div>
    }
      </div>
    )
  }
}

const stateToProps = (state) => {
  return{
    tasks: state.task,
    account: state.account
  }
}

const dispatchToProps = (dispatch) => {
  return{
    submitMessage: (params) => dispatch(actions.submitMessage(params)),
    notify: (params) => dispatch(actions.notify(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Task)
