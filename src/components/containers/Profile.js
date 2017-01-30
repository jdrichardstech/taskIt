import React, { Component } from 'react'
import { connect } from 'react-redux'
import { APIManager } from '../../utils'
import actions from '../../actions'




class Profile extends Component{

componentWillMount(){
  this.context.router.push("/"+this.context.router.location.pathname)

}

  componentDidMount(){
    console.log("PROFILECONTAINER: "+JSON.stringify(this.props.params.id))
    console.log("ROUTER:" + this.context.router)
    let responderId = this.props.params.id
    var url = '/api/profile/'+responderId
    console.log("URL: " +JSON.stringify(url))

    this.props.fetchProfile(url,null)
    .then((response)=>{
      this.context.router.push(this.context.router.location.pathname)

      console.log("PROFILE FETCHED: "+ JSON.stringify(response.result))
    })
    .catch((err)=>{
      console.log("OOPS: " + err.message)
    })
  }


  render(){

    console.log("CONTEXT:" + JSON.stringify(this.context))
    const responderProfile= this.props.account.taskResponder
    return(
      <div>

        {(responderProfile == null) ? null :
          <div style={{padding:'0 30px 30px 30px'}}>
          <h1>Profile for <span style={{color:'#f56a6a'}}>{responderProfile.username.toUpperCase()}</span></h1>
          <hr style={{background:'#f56a6a'}}/>
            <h2>User Name: <span style={{color:'#f56a6a'}}>{responderProfile.username}</span></h2>
            <h2>Email: <span style={{color:'#f56a6a'}}>{responderProfile.email}</span></h2>
            <h2>Phone: <span style={{color:'#f56a6a'}}>{responderProfile.phone}</span></h2>

        </div>}


      </div>
    )
  }
}

Profile.contextTypes={
  router:React.PropTypes.object
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
