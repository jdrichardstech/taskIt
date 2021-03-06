import React, { Component } from 'react'
import { APIManager, TextUtils, DateUtils} from '../../utils'
import { connect } from 'react-redux'
import { ClaimTask } from '../view'
import actions from '../../actions'
import { Link } from 'react-router'
import superagent from 'superagent'

class Task extends Component {
  constructor(){
    super()
    this.state={
      updated:{
          messages:[],
        profile:{
          id:'',
          username:'',
          task:''
        }
      }
    }
  }

  componentDidMount(){
    this.props.fetchMessages({task:this.props.params.id})
  }

  submitMessage(message){
    event.preventDefault()
    let updated = Object.assign({}, message)
    const user = this.props.account.user
    updated['profile'] = {
      id: user.id,
      username: user.username,
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
          taskResponderId:user.id
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
    const messages = this.props.messages[taskId]
    const categoryIcon = ["icon fa-shopping-basket fa-2x","icon fa-tree fa-2x","icon fa-home fa-2x","icon fa-question-circle fa-2x"]
    let selectedCategory = this.props.tasks.categories.indexOf(this.props.tasks.selectedCategory)
		const findUser =   (this.props.account.user == null) ? <div><h2 style={{color:'gray'}}>Ugh Please login or register to reply </h2></div>
		:
		null

	  return(
	    <div>
	      <div>
	        <h3 style={{color:'gray',paddingTop:30}}>Category: <span style={{color:'#f56a6a'}}>{task.category.toUpperCase()}</span></h3>
	      </div>
	      <div className="box" style={{padding:'10px 0 0 10px',width:'40%',background:'rgba(253,217,71,0.1)',boxShadow:'5px 5px 5px #855541'}}>
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
	      <div>
	        <ol>
	          <header className="major" style={{marginBottom:0, paddingBottom:0}}>
	            <h2 style={{marginBottom:10}}>Responses:</h2>
	          </header>
	          {(messages == null) ?  <div>No Replies</div> :  messages.map((message, i)=>{
	            return  <li key={message.id}><Link to ={'/profile/'+message.profile.id}><span>{message.profile.username}</span></Link> says: {message.text}</li>
	          })}
	        </ol>
	      </div>
	      <div style={{marginBottom:100}}>
	    </div>
		  </div>
		)
	}
}

const stateToProps = (state) => {
  return{
    tasks: state.task,
    account: state.account,
    messages:state.messages
  }
}

const dispatchToProps = (dispatch) => {
  return{
    submitMessage: (params) => dispatch(actions.submitMessage(params)),
    notify: (params) => dispatch(actions.notify(params)),
    fetchMessages: (params) => dispatch(actions.fetchMessages(params)),
  }
}

export default connect(stateToProps, dispatchToProps)(Task)
