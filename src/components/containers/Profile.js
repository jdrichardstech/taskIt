import React, { Component } from 'react'
import { connect } from 'react-redux'




class Profile extends Component{

  componentDidMount(){
    console.log("PROFILECONTAINER: "+JSON.stringify(this.props.info) )
  }
  componentDidUpdate("UPDATEPROFILECONTAINER: " + JSON.stringify(this.props.info))

  render(){
    return(
      <div>
      Profile container<br />

      </div>
    )
  }
}


const stateToProps =(state)=>{
  return{

  }
}

const dispatchToProps = (dispatch)=>{
  return{

  }
}

export default connect(stateToProps, dispatchToProps) (Profile)
