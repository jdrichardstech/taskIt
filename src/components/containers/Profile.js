import React, { Component } from 'react'
import { connect } from 'react-redux'
import superagent from 'superagent'
import { APIManager } from '../../utils'



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
  // superagent
  // .get(url)
  // .query(null)
  // .set('Accept', 'application/json')
  // .end((err, response) => {
  //   if (err){
  //     alert('ERROR: '+err)
  //     return
    // }

    APIManager.get(url, null)
    .then((response)=>{
      // console.log("RESPONSE: " + JSON.stringify(response))
      // console.log("RESPONSE RESULT: " + JSON.stringify(response.result))
      let responder = response.result
      updated['username'] = responder.username
      updated['email'] = responder.email
      updated['phone'] = responder.phone
      updated['responderId'] = responderId
      // console.log("RESPONDER PROFILE UPDATED: " + JSON.stringify(updated))
        this.setState({
          updated: updated
        })
    })
    .catch((err)=>{
      console.log("ERROR: " + err)
      }
    )
  }


  render(){
    return(
      <div style={{padding:30}}>
      <h2>Profile for Your Claimaint</h2>
      <strong>User Name: </strong>{this.state.updated.username}<br />
      <strong>Email: </strong>{this.state.updated.email}<br />
      <strong>Phone: </strong>{this.state.updated.phone}

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
