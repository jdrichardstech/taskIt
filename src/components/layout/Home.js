import React, { Component } from 'react'
 import { Tasks, Categories, Account } from '../containers'




class Home extends Component {
  render(){
    return(

      <div id="wrapper">


          <div id="main">
            <div className="inner">


                <header id="header" style={{paddingBottom:0,marginBottom:0, marginTop:0, paddingTop:50}}>
              <h1 className="logo">Jobber</h1>

                </header>


                <section>




                  <span className="image main"><img style={{height:150}} src="/images/pic12.jpg" alt="" /></span>

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
            <div className="col-md-2 col-md-offset-1" style={{borderLeft:'2px solid #f56a6a'}}>
              <header className="major">
                <h2>Account</h2>
              </header>
              < Account />


            </div>
          </div>
        </div>

      </div>
      <footer style={{marginBottom:0,paddingBottom:0}}>
        <hr style={{background:'#b22222',height:100,marginBottom:0,paddingBottom:0}}/>
      </footer>
    </div>
  </div>
    )
  }
}

export default Home
