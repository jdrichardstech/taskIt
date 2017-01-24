import React, { Component } from 'react'
import { APIManager, TextUtils, DateUtils} from '../../utils'
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
        <h2 style={{marginBottom:0}}><span style={{ color:'#f56a6a'}}>{TextUtils.capitalize(task.title)}</span></h2>

        <div><p>Category: {task.category}</p></div>
        <div style={{border:'1px solid #ddd' ,padding:'10px 0 0 10px',width:'40%'}}>
        {/*}  <h2>Hi {task.profile.username}</h2>*/}

        <h5 style={{marginBottom:0,padding:'0 0 0 5px',background:'rgba(250,250,210,0.5)'}}>{DateUtils.formattedDate(task.timestamp)}</h5>
        <hr />
        <center><h3 style={{marginBottom:20}}><span style={{ color:'#f56a6a'}}>{task.description}</span></h3></center>
      </div>
        <div style={{marginTop:30}}>
          {(this.props.account.user == null) ? <h2 style={{color:'#f56a6a'}}>Please login or register to reply </h2>
            :
          <ClaimTask onSubmit={this.submitMessage.bind(this)} />
        }
        </div>
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
