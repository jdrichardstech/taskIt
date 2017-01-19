import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'



class Task extends Component {
  componentDidMount(){
console.log("PROPS: "+ this.props)


  }
  render(){
    const taskId = this.props.params.id
    const task = this.props.tasks[taskId]
    return(
      <div>
        {/*<h2>Hi {task.profile.username}</h2>*/}
        Title:{task.title}<br /> Description: {task.description}<br /> Category: {task.category}
        <br />

      {(this.props.account.user == null) ? <h3>Please login or register to reply </h3>:
      <div>
        <textarea placeholder="enter message to respond">
        </textarea><br />
        <button>Submit</button>
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

export default connect(stateToProps)(Task)
