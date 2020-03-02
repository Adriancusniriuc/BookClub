import React from 'react'
import axios from 'axios'
import BookForm from './BookForm'
// import Authorization from '../../lib/authorization'
import { headers } from '../../lib/headers'
// import { withRouter } from 'react-router-dom'


class BookCreate extends React.Component {
  state = {
    books: null,
    clubId: [],
    data: {
      title: '',
      author: '',
      genre: '',
      no_pages: '',
      image: '',
      rating: '',
      // clubId:[]
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
      const clubId = this.props.match.params.id
      console.log(clubId)
      // const data = { ...this.state.data, clubs:[clubId] }
      const res = await axios.post('/api/books/', this.state.data, headers)

      this.props.history.push(`/books/${res.data.id}`)

      this.setState({ data: res.data })
      // this.props.history.goBack()
      console.log(this.state)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state.data)
    console.log('club id in state', this.state.clubId)
    // if (!this.state.books) return null
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

// export default withRouter(BookCreate)
export default BookCreate