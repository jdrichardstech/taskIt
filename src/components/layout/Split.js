import React, { Component } from 'react'
 import { Task, Account } from '../containers'


export default (props)=>{
  return(
    <div id="wrapper">


        <div id="main">
          <div className="inner">


              <header id="header" style={{paddingBottom:0,marginBottom:0, marginTop:0, paddingTop:50}}>
                <a href="index.html" className="logo"><h2>Jobber Order</h2></a>

              </header>


              <section>




                <span className="image main"><img style={{height:150}} src="/images/pic13.jpg" alt="" /></span>

              </section>
      <div className="container">
        <div className="row">
        <div className="col-md-8" >
          <header className="major">
            <h2>Order</h2>
          </header>
          <div>
            <Task  {...props} />
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
  </div>
</div>
  )
}
