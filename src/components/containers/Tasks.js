import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { CreateTask} from '../view'
import {connect } from 'react-redux'
import actions from '../../actions'
import {Link} from 'react-router'


class Tasks extends Component {

  constructor(){
    super()
    this.state={

    }
    this.getTasks = this.getTasks.bind(this)
  }

  getTasks(){
    if(this.props.tasks[this.props.tasks.selectedCategory]!=null)
      return

      this.props.fetchTasks({category: this.props.tasks.selectedCategory})
      .then(results => {

      })
      .catch(err => {
        alert(err)
      })
  }

  componentDidMount(){
    this.getTasks()

    }

    componentDidUpdate(){
    this.getTasks()
    }


      createTask(task){
        console.log("TASK CONTAINER: "+ JSON.stringify(task))
        // APIManager
        //   .post('api/task',task)
        //   .then((response)=>{
        //     console.log('Response: ' + JSON.stringify(response))
        //     then.props.tasksReceived(response.result)
        //
        //   })
        //   .catch((err)=>{
        //     console.log("Error" + err)
        //   })
        this.props.submitTask(task)
        .then(result=>{
            // console.log("SUBMIT TASK: " +JSON.stringify(result))
        })
        .catch(err => {
          console.log('ERROR:' + JSON.stringify(err))
        })
          }


      render(){
          return(
            <section id="banner" style={{paddingTop:0}}>
              <div className="content">
                <h2>Category: <span style={{color:'#f56a6a'}}>{this.props.tasks.selectedCategory}</span></h2>
            <ul>
            {(this.props.tasks[this.props.tasks.selectedCategory] == null) ? null: this.props.tasks[this.props.tasks.selectedCategory].map((task, i)=>{
              return (
                <Link to={'/task/'+task.id}>
                <div key={task.id} className="box col-md-3" style={{marginRight:10}}>

                  {/*}    <h3>Category: {task.category}</h3>*/}
                        <h3>Order: <span style={{color:'#f56a6a'}}>{task.title}</span></h3>

                </div>
                  </Link>
              )
            })}
            </ul>
            {/*  <CreateTask onSubmitTask={this.createTask.bind(this)} />*/}
            </div>
          </section>
          )
        }
  }


  const stateToProps=(state)=>{
    return{
      tasks: state.task
    }
  }

  const dispatchToProps=(dispatch)=>{
    return{
      tasksReceived: (tasks)=>dispatch(actions.tasksReceived(tasks)),
      // taskCreated: (task)=> dispatch(actions.tasksCreated(task)),
      fetchTasks: (params)=>dispatch(actions.fetchTasks(params)),
      submitTask: (params) => dispatch(actions.submitTask(params))
    }
  }







export default connect(stateToProps, dispatchToProps) (Tasks)
