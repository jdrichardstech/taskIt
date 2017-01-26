import React, { Component } from 'react'
import { connect } from 'react-redux'




class Profile extends Component{

  componentDidMount(){
    console.log("ID: " + JSON.stringify(this.props.profile))
  }

  render(){
    return(
      <div>
      Profile container
      {}
      </div>
    )
  }
}


const stateToProps =(state)=>{
  return{
    profile: state.account.user
  }
}

const dispatchToProps = (dispatch)=>{
  return{

  }
}

export default connect(stateToProps, dispatchToProps) (Profile)
