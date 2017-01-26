import React, { Component } from 'react'
import { connect } from 'react-redux'
import superagent from 'superagent'



class Profile extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  componentDidMount(){
    console.log("PROFILECONTAINER: "+JSON.stringify(this.props.info.params.id))
    let responderId = this.props.info.params.id
    var url = '/api/profile/'+responderId
  superagent
  .get(url)
  .query(null)
  .set('Accept', 'application/json')
  .end((err, response) => {
    if (err){
      alert('ERROR: '+err)
      return
    }

    // console.log('DBINFO MOVIEDB NEW: '+JSON.stringify(response.body))
    let responder = response.body


    let username = responder.result.username
    let email = responder.result.email
    let phone = responder.result.phone

      this.setState({
        username,
        email,
        phone

      })
        console.log("STATE: " + JSON.stringify(this.state.username + ' ' + this.state.email + ' '+ this.state.phone))
    })
  }


  render(){
    return(
      <div style={{pading:30}}>
      <h2>Profile for Your Claimaint</h2>
      User Name: {this.state.username}<br />
      Email: {this.state.email}<br />
      Phone: {this.state.phone}

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
