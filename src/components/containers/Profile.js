import React, { Component } from 'react'
import { connect } from 'react-redux'
import superagent from 'superagent'



class Profile extends Component{

  componentDidMount(){
    console.log("PROFILECONTAINER: "+JSON.stringify(this.props.info.params.id))
    var url = `https://api.themoviedb.org/3/search/movie?api_key=4160bdc56f74445097c8012631f85743&language=en-US&query=${urlMovieName}&page=1&include_adult=false`

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
