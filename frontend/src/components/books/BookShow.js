import React from 'react'
import axios from 'axios'
// import { headers } from '../../lib/headers'
import { Link, withRouter } from 'react-router-dom'
import Authorization from '../../lib/authorization'

class BookShow extends React.Component {
  state = {
    books: null,
    text: ''
  }

  getData = async () => {
    // const bookId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/books/`)
      this.setState({ books: res.data})
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getData()
  }

  handleDelete = async () => {
    const bookId = this.props.match.params.id
    try {
      await axios.delete(`/api/books/${bookId}/`, {
        headers: { Authorization: `Bearer ${Authorization.getToken()}` }
      })
      this.props.history.push('/clubs')
      // this.props.history.goBack()
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const text = e.target.value
    this.setState({ text })
    // console.log(text)
  }

  handleSubmitComment = async (e) => {
    e.preventDefault()
    const bookId = this.props.match.params.id
    try {
      await axios.post(`/api/books/${bookId}/comments/`, { text: this.state.text }, {
        headers: { Authorization: `Bearer ${Authorization.getToken()}` }
      })
      this.setState({ text: '' })
    } catch (err) {
      console.log(err)
    }
    this.getData()
  }

  handleDeleteComment = async (e) => {
    e.preventDefault()
    const bookId = this.props.match.params.id
    const commentId = e.target.name
   
    try {
      await axios.delete(`/api/books/${bookId}/comments/${commentId}/`, {
        headers: { Authorization: `Bearer ${Authorization.getToken()}` } 
      })
      //HEADERS AND AUTHORIZATION AS ABOVE
    } catch (error) {
      console.log(error)
    }
    this.getData()
  }

  isClubOwner = () => {
    return Authorization.getPayload().sub === this.state.clubs.user.id
  }

  render() {
    if (!this.state.books) return null
    const { text } = this.state
    // const bookId = this.props.match.params.id
    console.log('hello', this.state.books)
    return(
      <section>
        <main className="bookshow">
        <div className="book">
    <img className="bookshow-img" alt={this.state.books.title} src={this.state.books.image}/>
    {/* <p>{this.state.books.comments.text}</p> */}
   
    {/* {Authorization.isAuthenticated() && this.isClubOwner() ? */}
    <div>
    <Link to={`/books/${this.state.books.id}/edit/`}>
      <button>Edit Book</button>
      </Link>

    <button
    onClick={this.handleDelete}>
    Delete Book</button>
    </div>
    </div>

    {/* : null } */}
    <div className="comments">
    {this.state.books.comments.map((comment, i) => (
        <p key={i}>{comment.text}
        <button
        onClick={this.handleDeleteComment}
        name={comment.id}
        type="submit"
        className="button">
        Delete</button>
        </p>
      ))}
        <form className="review-form" onSubmit={this.handleSubmitComment}>
          <div>
            <textarea
              className="review-textarea"
              placeholder="Add a comment"
              onChange={this.handleChange}
              value={text}
            />
          </div>       
          <div>
            <button className="button" type="submit">Add</button>
          </div>  
              
        </form>
        </div>
        </main>
      </section>
    )
  }
}


export default withRouter(BookShow)