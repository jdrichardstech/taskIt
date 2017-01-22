import React, { Component } from 'react'
 import { Tasks, Categories, Account } from '../containers'




class Home extends Component {
  render(){
    return(

      <div id="wrapper">


          <div id="main">
            <div className="inner">


                <header id="header" style={{paddingBottom:0,marginBottom:0, marginTop:0, paddingTop:50}}>
                  <a href="index.html" className="logo"><h1>Jobber</h1></a>

                </header>


                <section>




                  <span className="image main"><img style={{height:150}} src="/images/pic13.jpg" alt="" /></span>

                </section>
        <div className="container">
          <div className="row">
            <div className="col-md-2" >
                  <Categories />
            </div>

            <div className="col-md-6 col-md-offset-1" style={{background:'rgba(220,220,220,0.1)'}}>
              <header className="major">
                <h2>Jobs</h2>
              </header>
                <Tasks />

            </div>
            <div className="col-md-2 col-md-offset-1" style={{borderLeft:'2px solid red'}}>
              <header className="major">
                <h2>Account</h2>
              </header>
              < Account />


            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
    )
  }
}

export default Home
