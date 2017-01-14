import React, { Component } from 'react'
 import { Tasks, Categories } from '../containers'



class Home extends Component {
  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                  <Categories />
            </div>
            <div className="col-md-8">
                <Tasks />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home
