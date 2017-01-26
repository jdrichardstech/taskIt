import React, { Component } from 'react'
import { APIManager, DateUtils, TextUtils } from '../../utils'
import { CreateTask} from '../view'
import {connect } from 'react-redux'
import actions from '../../actions'
import {Link} from 'react-router'
import Time from 'react-time'


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
    console.log('componentDidMount: '+ this.props.tasks.timestamp)

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
        const categoryIcon = ["icon fa-shopping-basket fa-2x","icon fa-tree fa-2x","icon fa-home fa-2x","icon fa-question-circle fa-2x"]
        let selectedCategory = this.props.tasks.categories.indexOf(this.props.tasks.selectedCategory)
        {/* const username = task.profile.username || 'anonymous'*/}
          return(

            <section id="banner" style={{paddingTop:0}}>
              <div className="content">
                
                <h2>Category: <span style={{color:'#f56a6a', paddingLeft:6,fontSize:'.8em'}}>{this.props.tasks.selectedCategory.toUpperCase()}</span></h2>
                <ul>
                {(this.props.tasks[this.props.tasks.selectedCategory] == null) ? null: this.props.tasks[this.props.tasks.selectedCategory].map((task, i)=>{
                  return (

                    <Link key={i}  to={'/task/'+task.id}>

                    <div key={task.id} className="box col-md-3" style={{marginRight:10, width:'30%',background:'white', boxShadow:'5px 5px 5px #855541'}}>
                      <span style={{color:'rgb(254,187,82)'}} className={categoryIcon[selectedCategory]}></span>
                        <span style={{padding:'20px 0 0 10px',marginBottom:0,fontFamily:'OpenSans-Semibold, sans-serif',color:'#000',fontSize:'1.1em'}}> Task {i+1}</span>
                        <hr />
                      {/*}    <h3>Category: {task.category}</h3>*/}

                          <center>  <h3 style={{color:'#f56a6a'}}>{TextUtils.capitalize(task.title)}</h3>  </center>

                          {/* <span style = {{float:'right'}}>{username}</span>*/}
                            <span style={{float:'right', fontSize:'.9em',paddingTop:25,color:'gray'}}>{DateUtils.formattedDate(this.props.tasks[task.id].timestamp)}
                            </span>


                    </div>

                      </Link>

                  )
                })}
                </ul>
            {/*} <CreateTask onSubmitTask={this.createTask.bind(this)} />*/}
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
