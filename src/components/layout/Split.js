import React, { Component } from 'react'
import { Task, Account } from '../containers'
import { Footer } from '../view'


class Split extends Component{
  render(){
    return(
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header id="header" style={{paddingBottom:0,marginBottom:0, marginTop:0, paddingTop:30}}>
              <h2 style={{fontSize:'2.5em'}}>Task<span style={{color:'#f56a6a'}}>It</span> Order</h2>
            </header>
            <section>
              <span className="image main"><img style={{height:150}} src="/images/pic13.jpg" alt="" /></span>
            </section>
            <div className="container">
              <div className="row">
                <div className="col-md-8" >
                  <header className="major" style={{marginBottom:0, paddingBottom:0}}>
                    <h2 style={{marginBottom:10}}>Task</h2>
                  </header>
                  <div>
                    <Task  {...this.props} />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1" style={{borderLeft:'2px solid red'}}>
                  <header className="major">
                    <h2>Account</h2>
                  </header>
                  <Account />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Split
