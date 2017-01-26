import React, { Component } from 'react'
import { connect } from 'react-redux'
import superagent from 'superagent'



class Profile extends Component{

  componentDidMount(){
    console.log("PROFILECONTAINER: "+JSON.stringify(this.props.info.params.id))
    let responderId = this.props.info.params.id
    var url = '/api/profile/'+responderId
  superagent
  .get(url)
  .query(null)
  .set('Accept', 'application/json')
  .end((err, response) => {
    if (err){
      alert('ERROR: '+err)
      return
    }

    // console.log('DBINFO MOVIEDB NEW: '+JSON.stringify(response.body))
    let results = response.body.results

    console.log("RESULTS: " + results)
      // this.setState({
      //
      //
      // })
    })
  }


  render(){
    return(
      <div>
      Profile container<br />


      </div>
    )
  }
}


const stateToProps =(state)=>{
  return{

  }
}

const dispatchToProps = (dispatch)=>{
  return{

  }
}

export default connect(stateToProps, dispatchToProps) (Profile)
