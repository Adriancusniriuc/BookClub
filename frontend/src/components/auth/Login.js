import React from 'react'
import axios from 'axios'
import Authorization from '../../lib/authorization'
import { headers } from '../../lib/headers'

class Login extends React.Component {
  state = {
    data: {
      username: '',
      password: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/login', this.state.data, headers)
      Authorization.setToken(res.data.token)
      console.log(res.data)
      this.props.history.push('/')
      
    } catch (error) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  render() {

    return(
    <section>
      <main className="login">
      <h1>Login Here</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-div">
            <input
              placeholder="username"
              name="username"
              onChange={this.handleChange} />
          </div>
          <div className="form-div">
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange} />
          </div>
          <div className="button-div">
            <button
              className="button"
              type="submit">
              Login</button>
          </div>
        </form>
      </main>
      
    </section>
  )
  }

}

export default Login