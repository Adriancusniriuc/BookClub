import React from 'react'
import axios from 'axios'
import { headers } from '../../lib/headers'
import { Link, withRouter } from 'react-router-dom'
import Authorization from '../../lib/authorization'

//DOUBLE CHECK THE WITHROUTER OPTION AT IMPORT AND EXPORT 

class BookShow extends React.Component {
  state = {
    books: null,
    text: ''
  }

  async componentDidMount() {
    const bookId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/books/${bookId}/`)
      this.setState({ books: res.data })
      // console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  handleDelete = async () => {
    const bookId = this.props.match.params.id
    try {
      await axios.delete(`/api/books/${bookId}/`, {
        headers: { Authorization: `Bearer ${Authorization.getToken()}` }
      })
      // this.props.history.push('/clubs')
      this.props.history.goBack()
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const text = e.target.value
    this.setState({ text })
  }

  handleSubmitComment = async (e) => {
    e.preventDefault()
    const bookId = this.props.match.params.id
    try {
      await axios.post(`/api/books/${bookId}/`, { text: this.state.text }, {
        headers: { Authorization: `Bearer ${Authorization.getToken()}` }
      })
      this.setState({ text: '' })
    } catch (err) {
      console.log(err)
    }
    this.componentDidMount()
  }

  handleDeleteComment = async (e) => {
    e.preventDefault()
    const bookId = this.props.match.params.id
    const commentId = e.target.name
    console.log(e.target.name)
    try {
      await axios.delete(`/api/books/${bookId}/comments/${commentId}`, headers)
    } catch (error) {
      console.log(error)
    }
    this.componentDidMount()
  }

  isClubOwner = () => {
    return Authorization.getPayload().sub === this.state.clubs.user.id
  }

  render() {
    if (!this.state.books) return null

    return(
      <section>

      <h1>Book Show</h1>
  <div>
    <img alt={this.state.books.title} src={this.state.books.image}/>
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
    {/* : null } */}
    
    {this.state.books.comments.map((comment, i) => (
        <p key={i}>{comment.text} {comment.id}
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
              value={this.state.books.comments.text}
            />
          </div>       
          <div>
            <button className="button" type="submit">Add</button>
          </div>      
        </form>
      </div>

      </section>
    )
  }
}


export default withRouter(BookShow)