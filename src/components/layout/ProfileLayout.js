import React, { Component } from 'react'
import { Profile } from '../containers'
import { Footer } from '../view'



class ProfileLayout extends Component{
  componentDidMount(){
    console.log("PROFILELAYOUT THIS.PROPS: " + JSON.stringify(this.props))
  }
  render(){
    return(
        <div id="wrapper">
            <div id="main">
              <div className="inner">
                  <header id="header" style={{paddingBottom:0,marginBottom:0, marginTop:0, paddingTop:30}}>
                    <h1 style={{fontSize:'4em'}}>Task<span style={{color:'#f56a6a'}}>It</span> </h1>
                  </header>
                  <section>
                    <span className="image main"><img style={{height:150}} src="/images/pic12.jpg" alt="" /></span>
                  </section>
                  <Profile {...this.props} />
                </div>
                  <Footer />
            </div>
        </div>
    )
  }
}

export default ProfileLayout
