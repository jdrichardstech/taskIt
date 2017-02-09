import React, { Component } from 'react'
import { Tasks, Categories, Account} from '../containers'
import { Footer } from '../view'




class Home extends Component {
  render(){
    return(
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header id="header" style={{paddingBottom:0,marginBottom:0, marginTop:0, paddingTop:30}}>
              <h1 style={{fontSize:'4em'}}>Task<span style={{color:'#f56a6a'}}>It</span></h1>
            </header>
            <section>
              <span className="image main"><img style={{height:150}} src="/images/pic12.jpg" alt="" /></span>
            </section>
            <div className="container">
              <div className="row">
                <div className="col-md-2" >
                  <Categories />
                </div>
                <div className="col-md-6 col-md-offset-1" style={{background:'rgba(253,217,71,0.1)'}}>
                  <header className="major" style={{paddingTop:10}}>
                    <h2>Tasks Available:</h2>
                  </header>
                  <Tasks />
                </div>
                <div className="col-md-2 col-md-offset-1" style={{borderLeft:'2px solid #f56a6a'}}>
                  <header className="major" style={{paddingTop:10}}>
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

export default Home
