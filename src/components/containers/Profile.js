import React, { Component } from 'react'
import { connect } from 'react-redux'
import superagent from 'superagent'
import { APIManager } from '../../utils'
import actions from '../../actions'




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
    var url = '/api/profile/'+this.props.messages.profile.id
    console.log("URL: " +JSON.stringify(url))
  // superagent
  // .get(url)
  // .query(null)
  // .set('Accept', 'application/json')
  // .end((err, response) => {
  //   if (err){
  //     alert('ERROR: '+err)
  //     return
    // }

    // APIManager.get(url, null)
    // .then((response)=>{
    //   // console.log("RESPONSE: " + JSON.stringify(response))
    //   // console.log("RESPONSE RESULT: " + JSON.stringify(response.result))
    //   let responder = response.result
    //   updated['username'] = responder.username
    //   updated['email'] = responder.email
    //   updated['phone'] = responder.phone
    //   updated['responderId'] = responderId
    //   // console.log("RESPONDER PROFILE UPDATED: " + JSON.stringify(updated))
    //     this.setState({
    //       updated: updated
    //     })
    // })
    // .catch((err)=>{
    //   console.log("ERROR: " + err)
    //   }
    // )
    // this.props.fetchProfile(url,null)
    // .then((response)=>{
    //   // console.log("PROFILE FETCHED: "+ JSON.stringify(response.result))
    //     let responder = response.result.taskResponder
    //     updated['username'] = responder.username
    //     updated['email'] = responder.email
    //     updated['phone'] = responder.phone
    //     updated['responderId'] = responderId
    //      console.log("RESPONDER PROFILE UPDATED: " + JSON.stringify(updated))
    //       this.setState({
    //         updated: updated
    //       })
    //
    // })
    // .catch((err)=>{
    //   console.log("OOPS: " + err.message)
    // })
  }


  render(){
    return(
      <div style={{padding:30}}>
      <h1>Profile for Your Claimaint</h1>
      <h2><strong>User Name: </strong>{this.state.updated.username}</h2>
      <h2><strong>Email: </strong>{this.state.updated.email}</h2>
      <h2><strong>Phone: </strong>{this.state.updated.phone}</h2>

      </div>
    )
  }
}


const stateToProps =(state)=>{
  return{
    messages:state.messages
  }
}

const dispatchToProps = (dispatch)=>{
  return{
    fetchProfile:(path, params) => dispatch(actions.fetchProfile(path, params))
  }
}

export default connect(stateToProps, dispatchToProps) (Profile)
