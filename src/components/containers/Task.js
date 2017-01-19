import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'



class Task extends Component {
  componentDidMount(){



  }
  render(){
    const taskId = this.props.params.id
    const task = this.props.tasks[taskId]
    return(
      <div>
        {/*<h2>Hi {task.profile.username}</h2>*/}
        Title:{task.title}<br /> Description: {task.description}<br /> Category: {task.category}
      </div>
    )
  }
}

const stateToProps = (state) => {
  return{
    tasks: state.task
  }
}

export default connect(stateToProps)(Task)
