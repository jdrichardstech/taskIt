import React, { Component } from 'react'
 import { Tasks, Categories, Account } from '../containers'




class Home extends Component {
  render(){


return(


    <div id="wrapper">


        <div id="main">
          <div className="inner">


              <header id="header">
                <a href="index.html" className="logo"><strong>Editorial</strong> by HTML5 UP</a>
                <ul className="icons">
                  <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                  <li><a href="#" className="icon fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                  <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a href="#" className="icon fa-medium"><span className="label">Medium</span></a></li>
                </ul>
              </header>


              <section id="banner">
                <div className="content">
                  <header>
                    <h1>Welcome to Tasks</h1>

                  </header>
                  <div>
                    <Account />
                  </div>

                <div>
                  <Tasks />
                </div>

                </div>

              </section>
          </div>
        </div>

        <div id="sidebar">
          <Categories />
        </div>

    </div>

  )

}
}

export default Home
