import React, { Component } from 'react'
import { connect } from 'react-redux'
import { APIManager } from '../../utils'
import actions from '../../actions'




class Profile extends Component{

componentWillMount(){
  this.context.router.push(this.context.router.location.pathname)
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
