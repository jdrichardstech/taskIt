import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'

class Categories extends Component{

  selectCategory(category, event){
    event.preventDefault()
    // console.log('selectCategory:' + category)
    this.props.selectCategory(category)
  }

  render(){
    let content =  this.props.tasks.categories.map((category, i)=>{
      const color = (category==this.props.tasks.selectedCategory) ? '#f56a6a' : '#333'

      return (
        <li   key={category}>
        <a   onClick={this.selectCategory.bind(this, category)} style={{color:color, paddingRight:15}} href="#">{category}</a>
        </li>
      )
    })

    return(
      <div >
        <nav id="menu" >
          <header className="major" style={{marginRight:200, padding:10}}>
            <h2>Categories</h2>
          </header>
        	<ul>{content}</ul>
        </nav>
      </div>
    )
  }
}

const stateToProps = (state)=>{
  return{
    tasks: state.task,
    selected:state.task.selected
  }
}

const dispatchToProps = (dispatch)=> {
  return{
    selectCategory: (category) => dispatch(actions.selectCategory(category))
  }
}

export default connect(stateToProps,dispatchToProps)(Categories)
