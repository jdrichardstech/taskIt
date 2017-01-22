import React, { Component } from 'react'





class Authenticate extends Component {
  constructor(){
    super()
    this.state={
      credentials:{
        username:'',
        phone:'',
        email:'',
        password:''
      }
    }
  }


  updateCredentials(field, event){
    // console.log('updateCredentials: '+ field + "= " +event.target.value)
    let updated = Object.assign({}, this.state.credentials)
    updated[field] = event.target.value
    this.setState({
      credentials: updated
    })
  }


  register(event){
    // console.log('register: ' + JSON.stringify(this.state.credentials))
     this.props.onRegister(this.state.credentials)
  }

  login(event){
    this.props.onLogin(this.state.credentials)
    // console.log('login'+ JSON.stringify(this.state.credentials))
  }


  render(){
    return(
      <div>
      <div>
        <h4>Register</h4>
        <input onChange={this.updateCredentials.bind(this, 'username')} placeholder="Username" type="text" /><br />
        <input onChange={this.updateCredentials.bind(this, 'phone')}  placeholder="Phone" type="text" /><br />
        <input onChange={this.updateCredentials.bind(this, 'email')}  placeholder="Email" type="text" /><br />
        <input onChange={this.updateCredentials.bind(this, 'password')}  placeholder="Password" type="password" /><br />
        <button onClick={this.register.bind(this)}>Join</button>

      </div>
      <hr />
      <div style={{marginTop:25}}>
        <h4>Login</h4>
        <input onChange={this.updateCredentials.bind(this, 'email')}  placeholder="Email" type="text" /><br />
        <input onChange={this.updateCredentials.bind(this, 'password')} placeholder="Password" type="password" /><br />
        <button onClick={this.login.bind(this)}>Login</button>
      </div>

      </div>

    )
  }

}

export default Authenticate
