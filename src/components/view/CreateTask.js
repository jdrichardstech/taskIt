import React, { Component } from 'react'





class CreateTask extends Component {
  constructor(){
    super()
    this.state ={
      task:{
        title:'',
        category:'delivery',
        description:''
      }

    }
  }


  updateTask(event){
    event.preventDefault()
    let updated= Object.assign({}, this.state.task)
    updated[event.target.id] = event.target.value
    this.setState({
      task:updated
    })
  }


  submitTask(event){
    event.preventDefault()
    console.log("State: " + JSON.stringify(this.state.task))
    this.props.onSubmitTask(this.state.task)
  }

  render(){
    return(
      <div>
      <h2>Create Task</h2>
      <form>
      <input onChange={this.updateTask.bind(this)} type="text" id="title" placeholder="title" /><br />
      <input onChange={this.updateTask.bind(this)} type="text" id="description" placeholder="description" /><br />
      <select id="category" onChange={this.updateTask.bind(this)}>
        <option value="delivery">Delivery</option>
        <option value="dog walking">Dog Walking</option>
        <option value ="house cleaning">House Cleaning</option>
      </select>
      <button onClick={this.submitTask.bind(this)} type="submit">Submit</button>
      </form>
      </div>
    )
  }
}

export default CreateTask
