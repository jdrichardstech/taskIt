import React, { Component } from 'react'



class ClaimTask extends Component{
  constructor(){
    super()
    this.state={
      message:{
        text:''
      }
    }
  }

  updateMessage(event){
    let updated = Object.assign({}, this.state.message)
    updated['text'] = event.target.value
    this.setState({
      message: updated
    })
    // console.log("CHANGE: " + JSON.stringify(event.target.value))
  }

  submitMessage(message){
     this.props.onSubmit(this.state.message)
    // console.log('handleSubmitClaim: '+ JSON.stringify(this.state.message))
  }
  render(){



    return(
      <div>
      <label>Please respond below bid for this order</label>
      <textarea onChange={this.updateMessage.bind(this)} >
      </textarea><br />
      <button onClick={this.submitMessage.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default ClaimTask
