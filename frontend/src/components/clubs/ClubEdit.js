import React from 'react'
import ClubForm from './ClubForm'
// import Authorization from '../../lib/authorization'
import { headers } from '../../lib/headers'
import axios from 'axios'

class ClubEdit extends React.Component {
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

  async componentDidMount() {
    const clubId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/clubs/${clubId}/`)
      this.setState({ data: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const clubId = this.props.match.params.id
    
    try {
      const { data } = await axios.put(`/api/clubs/${clubId}/`, this.state.data, headers)
      // , {
      //   headers: { Authorization:  `Bearer ${Authorization.getToken()}` }
      // })
      this.props.history.push(`/clubs/${data.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return(
    <section>
      <h1> Club Edit </h1>
      <ClubForm
       data={this.state.data}
       handleChange={this.handleChange}
       handleSubmit={this.handleSubmit}/>
    </section>
  )
  }

}

export default ClubEdit