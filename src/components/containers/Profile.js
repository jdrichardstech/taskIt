import React, { Component } from 'react'
import { connect } from 'react-redux'
import superagent from 'superagent'
import { APIManager } from '../../utils'
import actions from '../../actions'




class Profile extends Component{

  componentDidMount(){
    console.log("PROFILECONTAINER: "+JSON.stringify(this.props.params.id))

    let responderId = this.props.params.id
    var url = '/api/profile/'+responderId
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
    this.props.fetchProfile(url,null)
    .then((response)=>{
      console.log("PROFILE FETCHED: "+ JSON.stringify(response.result))
    })
    .catch((err)=>{
      console.log("OOPS: " + err.message)
    })
  }


  render(){

    const responderProfile= this.props.account.taskResponder
    return(
      <div>
        <div style={{padding:30}}>
        <h1>Profile for Your Responser</h1>
        {(responderProfile == null) ? null :
          <div>
            <h2><strong>User Name: </strong>{responderProfile.username}</h2>
            <h2><strong>Email: </strong>{responderProfile.email}</h2>
            <h2><strong>Phone: </strong>{responderProfile.phone}</h2>

        </div>}

        </div>
      </div>
    )
  }
}


const stateToProps =(state)=>{
  return{
    messages:state.messages,
    account: state.account
  }
}

const dispatchToProps = (dispatch)=>{
  return{
    fetchProfile:(path, params) => dispatch(actions.fetchProfile(path, params))
  }
}

export default connect(stateToProps, dispatchToProps) (Profile)
