import React from 'react'
import axios from 'axios'
import BookForm from './BookForm'
import Authorization from '../../lib/authorization'
import { headers } from '../../lib/headers'
import { withRouter } from 'react-router-dom'


class BookCreate extends React.Component {
  state = {
    data: {
      title: '',
      author: '',
      genre: '',
      no_pages: '',
      image: '',
      rating: '',
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
      await axios.post('/api/books/', this.state.data, headers, {
        headers: { Authorization:  `Bearer ${Authorization.getToken()}` }
      })
      // this.props.history.push(`/books/${res.data.id}`)
      this.props.history.goBack()
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return(
    <section>
      <h1>Book Create</h1>
      <BookForm
      data={this.state.data}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}/>
    </section>
  )
  }

}

export default withRouter(BookCreate)