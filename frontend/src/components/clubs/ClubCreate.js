import React from 'react'
import axios from 'axios'
import ClubForm from './ClubForm'
// import Authorization from '../../lib/authorization'
// import { headers } from '../../lib/headers'


class ClubCreate extends React.Component {
  state = {
    data: {
      name: '',
      venue: '',
      postcode: '',
      date: '',
      description: '',
      maxspace: '',
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    console.log(data)
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/clubs/', this.state.data)
      // , {
      //   headers: { Authorization:  `Bearer ${Authorization.getToken()}` }
      // })
      this.props.history.push(`/clubs/${res.data.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return(
    <section>
      <h1>Club Create</h1>
      <ClubForm
      data={this.state.data}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}/>
    </section>
  )
  }

}

export default ClubCreate