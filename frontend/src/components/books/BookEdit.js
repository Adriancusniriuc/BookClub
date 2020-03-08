import React from 'react'
import axios from 'axios'
import BookForm from './BookForm'
import Authorization from '../../lib/authorization'
import { headers } from '../../lib/headers'


class BookEdit extends React.Component {
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

  async componentDidMount() {
    const bookId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/books/${bookId}`)
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
    const bookId = this.props.match.params.id
    try {
      const { data } = await axios.put(`/api/books/${bookId}/`, this.state.data, headers, {
        headers: { Authorization:  `Bearer ${Authorization.getToken()}` }
      })
      this.props.history.push(`/books/${data.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return(
    <section>
      <h1>Make edits to your book</h1>
      <BookForm
      data={this.state.data}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}/>
    </section>
  )
  }

}

export default BookEdit