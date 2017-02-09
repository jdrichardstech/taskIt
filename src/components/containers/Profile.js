import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'


class Profile extends Component{

  componentDidMount(){

    const id = this.props.params.id
    console.log("PROFILE CONTAINER, PARAMS.ID: " + JSON.stringify(id))

  	if (this.props.profile[id] != null)
			return

		this.props.fetchProfile(id)
  }


  render(){

    const profile = this.props.profile[this.props.params.id]
    console.log("PROFILE CONTAINTER, profile VARIABLE IN RENDER: " + JSON.stringify(profile))
    return (profile == null) ? <div>'Not Found' </div>: (

          <div style={{padding:'0 30px 30px 30px'}}>
          {/*  <h1>Profile for <span style={{color:'#f56a6a'}}>{profile.username.toUpperCase()}</span></h1>
            <hr style={{background:'#f56a6a'}}/>
              <h2>User Name: <span style={{color:'#f56a6a'}}>{profile.username}</span></h2>*/}
              <h2>Email: <span style={{color:'#f56a6a'}}>{profile.email}</span></h2>
              <h2>Phone: <span style={{color:'#f56a6a'}}>{profile.phone}</span></h2>
          </div>
    )
  }
}

const stateToProps = (state)=>{
  return{
    profile: state.profile
  }
}

const dispatchToProps = (dispatch) => {
  return{
    fetchProfile:(id) => dispatch(actions.fetchProfile(id))
  }
}

export default connect(stateToProps, dispatchToProps)(Profile)
