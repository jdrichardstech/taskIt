import React, { Component } from 'react'
import { Profile } from '../containers'



class ProfileLayout extends Component{
  componentDidMount(){
    console.log("PROFILELAYOUT: " + JSON.stringify(this.props))
  }
  render(){
    return(
      <div>
      <Profile info={this.props}  />
      </div>
    )
  }
}

export default ProfileLayout
