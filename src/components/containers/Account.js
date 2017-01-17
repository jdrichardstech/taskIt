import React, { Component } from 'react'
import { Authenticate } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'



class Account extends Component{


  register(credentials){
    // console.log("REGISTER CONT: " + JSON.stringify(credentials))
    this.props.register(credentials)
  }


  login(credentials){
    this.props.login(credentials)
    .then(result=>{

    })
    .catch(err=>{
      alert(err.message)
    })
  }
  render(){

    return(

      <div>
        <h3>Account</h3>
        <Authenticate
          onLogin={this.login.bind(this)}
          onRegister={this.register.bind(this)} />

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
    login: (credentials)=>dispatch(actions.login(credentials))
  }
}


export default connect(stateToProps, dispatchToProps)(Account)
