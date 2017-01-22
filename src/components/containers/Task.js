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
        text: updated.text
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
        <div>
        {/*}  <h2>Hi {task.profile.username}</h2>*/}
          <p style={{fontSize:'1.5em', marginBottom:0}}><strong>Category:</strong><span style={{paddingLeft:10, color:'#f56a6a'}}>{task.category}</span></p>
          <p style={{fontSize:'1.5em',marginBottom:0}}><strong>Description:</strong><span style={{paddingLeft:10, color:'#f56a6a'}}>{task.title}</span></p>
          <p style={{fontSize:'1.5em',marginBottom:0}}><strong>Title:</strong><span style={{paddingLeft:10, color:'#f56a6a'}}>{task.description}</span></p>
        </div>
        <div style={{marginTop:30}}>
          {(this.props.account.user == null) ? <h3 style={{color:'#f56a6a'}}>Please login or register to reply </h3>
            :
          <ClaimTask onSubmit={this.submitMessage.bind(this)} />
        }
        </div>
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
