import React from 'react'
import axios from 'axios'
// import DjangoCSRFToken from 'django-react-csrftoken'
import Authorization from '../../lib/authorization'
// import { headers } from '../../lib/headers'


class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log(this.state.data)

    try {
      const res = await axios.post('/api/login/', this.state.data)
      Authorization.setToken(res.data.token)
      //you get a token once you have logged in. 
      //we do not import headers because that would be asking for a token before actually being logged in 
    
      console.log(res.data)
      console.log('here')
      this.props.history.push('/')
      
    } catch (error) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  render() {

    return(
    <section>

      <h1>Login Here</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-div">
            <input
              aria-label="Email"
              type="email"
              placeholder="email"
              name="email"
              onChange={this.handleChange} />
          </div>
          <div className="form-div">
            <input
              aria-label="Password"
              type="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange} />
          </div>
          <div>
            <button
              className="button"
              type="submit">
              Login</button>
          </div>
        </form>
      
    </section>
  )
  }

}

export default Login