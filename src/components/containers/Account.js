import React, { Component } from 'react'
import { Authenticate } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'



class Account extends Component{

  componentDidMount(){
  		if (this.props.user != null)
  			return

  		this.props.checkCurrentUser()
  		.then(response => {

  		})
  		.catch(err => {
  			console.log('ERROR: '+err.message)
  		})
  	}
  register(credentials){
    // console.log("REGISTER CONT: " + JSON.stringify(credentials))
    this.props.register(credentials)
  }


  login(credentials){
    evernt.preventDefault()
    this.props.login(credentials)
    .then(result=>{

    })
    .catch(err=>{
      alert(err.message)
    })
  }

  logout(event)
  event.preventDefault()
    // console.log('hello logout')
    this.props.logout()
    .then(result=>{
      alert("Goodbye!")
    })
    .catch(err=>{
      alert(err.message)
    })
  }

  render(){

    return(

      <div style={{marginBottom:100}}>

        {(this.props.user==null) ?
          <Authenticate onLogin={this.login.bind(this)} onRegister={this.register.bind(this)} />
          :
          <div>
            <h2>Hello <span style={{color:'#f56a6a'}}>{this.props.user.username.toUpperCase()}</span></h2>
            <button onClick={this.logout.bind(this)}>Logout</button>
        </div>
        }

      </div>

    )
  }
}

const stateToProps = (state) =>{
  return{
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return{
    register: (credentials)=>dispatch(actions.register(credentials)),
    login: (credentials)=>dispatch(actions.login(credentials)),
    checkCurrentUser: ()=>dispatch(actions.checkCurrentUser()),
    logout: ()=>dispatch(actions.logout())
  }
}


export default connect(stateToProps, dispatchToProps)(Account)
