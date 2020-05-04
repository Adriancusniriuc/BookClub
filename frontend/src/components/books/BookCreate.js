import React from 'react'
import axios from 'axios'
import BookForm from './BookForm'
// import Authorization from '../../lib/authorization'
// import { headers } from '../../lib/headers'
// import { withRouter } from 'react-router-dom'


class BookCreate extends React.Component {
  state = {
    books: [],
    club: null,
    data: {
      title: '',
      author: '',
      genre: '',
      no_pages: '',
      image: '',
      rating: ''
    }
  }

  getData = async () => {
    const clubId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/clubs/${clubId}/`)
      this.setState({ club: res.data })
    } catch (error) {
      console.log(error)
    }
    }
  componentDidMount() {
    this.getData()
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
      const res = await axios.post(`/api/books/`, this.state.data)
      const bookId = res.data
      console.log('bookid', bookId)
      this.state.club.book.push(bookId)
      console.log('book in data', this.state.club.book)
      this.setState({ data: res.data })
      this.props.history.push(`/books/${res.data.id}`)

      this.addToClub()
      // this.props.history.goBack()
      // console.log(this.state)

    } catch (error) {
      console.log(error)
    }
  }

  addToClub = async () => {

    const clubId = this.props.match.params.id
    const club = this.state.club

    console.log(club)

    const pkArr = []
    club.member.map(memb => pkArr.push(memb.id))
    const bookPkArr = []
    club.book.map(bk => bookPkArr.push(bk.id))
    

    const sendData = {
      name: club.name,
      venue: club.venue,
      postcode: club.postcode,
      date: club.date,
      description: club.description,
      maxspace: club.maxspace,
      member: pkArr.map(pk => pk),
      book: bookPkArr.map(book => book),
      owner: club.owner
    }

    // console.log('data', sendData)

    
    
    try {
    await axios.put(`/api/clubs/${clubId}/`, sendData)
  } catch (error) {
    console.log(error.response.data)
  }
}

  render() {
    if (!this.state.club) return null
    // console.log(this.state.books)
    // console.log('bookArr in club', this.state.club.book)
    // console.log(this.state.data)
    // console.log('club id in state', this.state.clubId)
    // if (!this.state.books) return null
    return(
    <section>
      <h1>Create a Book!</h1>
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