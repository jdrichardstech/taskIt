import React, { Component } from 'react'
import { connect } from 'react-redux'
import superagent from 'superagent'



class Profile extends Component{
  constructor(){
    super()
    this.state={
      updated:{
        username:'',
        email:'',
        phone:'',
        responderId:''
      }
    }
  }

  componentDidMount(){
    console.log("PROFILECONTAINER: "+JSON.stringify(this.props.info.params.id))
    let updated = Object.assign({}, this.state)
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

    console.log('TASK RESPONSE BODY: '+JSON.stringify(response.body))

    let responder = response.body
    updated['username'] = responder.result.username
    updated['email'] = responder.result.email
    updated['phone'] = responder.result.phone
    updated['responderId'] = responderId

      this.setState({
        updated: updated
      })
        console.log("STATE: " + JSON.stringify(this.state.username + ' ' + this.state.email + ' '+ this.state.phone))
    })
  }


  render(){
    return(
      <div style={{padding:30}}>
      <h2>Profile for Your Claimaint</h2>
      <strong>User Name: </strong>{this.state.username}<br />
      <strong>Email: </strong>{this.state.email}<br />
      <strong>Phone: </strong>{this.state.phone}

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
