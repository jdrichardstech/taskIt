import React, { Component } from 'react'
import { APIManager, TextUtils, DateUtils} from '../../utils'
import { connect } from 'react-redux'
import { ClaimTask } from '../view'
import actions from '../../actions'
import { Link } from 'react-router'




class Task extends Component {
  componentDidMount(){
console.log("SELECTED CATEGORY: "+ JSON.stringify(this.props.tasks.categories.indexOf(this.props.tasks.selectedCategory)))


  }
constructor(){
  super()
  this.state={
    updated:{
      profile:{
        id:'',
        username:'',
        task:''
      }
    }
  }
}

  submitMessage(message){
    // console.log("CLAIM: " + JSON.stringify(reply))
    event.preventDefault()
    let updated = Object.assign({}, message)
    const user = this.props.account.user
    updated['profile'] = {
      id: user.id,
      username: user.username
    }


    updated['task']= this.props.params.id

    const taskId = this.props.params.id
    const task = this.props.tasks[taskId]
    this.setState({
      updated: updated
    })
    this.props.submitMessage(updated)
    .then(response=>{
      // console.log("MESSAGE CREATED: " + JSON.stringify(response))

    return  this.props.notify({
        recipient: task.profile.id,
        text: updated.text,
        taskResponder: user.username,
        taskResponderId:user.id,
        taskId: taskId
      })
      console.log("RESPONDER ID: "+ this.s)
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
    const categoryIcon = ["icon fa-shopping-basket fa-2x","icon fa-tree fa-2x","icon fa-home fa-2x","icon fa-question-circle fa-2x"]
    let selectedCategory = this.props.tasks.categories.indexOf(this.props.tasks.selectedCategory)
    const taskResponder = (this.state.updated.profile.username.length == 0) ?
    <div>
    <div>
      <h3 style={{color:'gray',paddingTop:30}}>Category: <span style={{color:'#f56a6a'}}>{task.category.toUpperCase()}</span></h3>
    </div>

  <div className="box" style={{padding:'10px 0 0 10px',width:'40%',background:'rgba(253,217,71,0.1)',boxShadow:'5px 5px 5px #855541'}}>
    {/*}  <h2>Hi {task.profile.username}</h2>*/}
    <div style={{marginBottom:30}}>
    <span style={{color:'rgb(254,187,82)'}} className={categoryIcon[selectedCategory]}></span>
     <span style={{padding:'10px 10px 30px 20px'}}>Requested {DateUtils.formattedDate(task.timestamp)}</span>
    </div>
    <div>
      <center><hr style={{paddingRight:10,width:'75%'}} /></center>
        <h2 style={{marginBottom:15}}><span style={{ color:'#000'}}>{TextUtils.capitalize(task.title)}</span></h2>

      <h3 style={{marginBottom:50}}><span style={{ color:'#f56a6a'}}>{TextUtils.capitalize(task.description)}</span></h3>
    </div>

  </div>
  <hr style={{border:'2px solid #f56a6a',background:'#f56a6a',margin:'50px 0 50px 0'}}/>
  <div style={{marginBottom:100}}>
      {(this.props.account.user == null) ? <h2 style={{color:'gray'}}>Please login or register to reply </h2>
    :<div>
    <ClaimTask onSubmit={this.submitMessage.bind(this)} />
    <p>Respond to message add link to responder will appear here</p>
    </div>

    }
    </div>
  </div>

      :

    <div> <h2>Here is the profile for: <br /></h2><Link to={'/profile/'+this.state.updated['profile'].id}>{this.state.updated['profile'].username.toUpperCase()}</Link></div>
    return(


        <div>
          {taskResponder}

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
