import React from 'react'
import axios from 'axios'
import { headers } from '../../lib/headers'


class BookShow extends React.Component {
  state = {
    books: null
    // comments: null
  }

  async componentDidMount() {
    const bookId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/books/${bookId}`)
      this.setState({ books: res.data })
      // console.log(res.data)
    } catch (error) {
      console.log(error)
    }
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

  render() {
    if (!this.state.books) return null

    return(
      <section>

      <h1>Book Show</h1>
  <div>
    <img src={this.state.books.image}/>
    {/* <p>{this.state.books.comments.text}</p> */}

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

        <form className="review-form" onSubmit={this.handleSubmitReview}>
          <div>
            <textarea
              className="review-textarea"
              placeholder="Add a review"
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


export default BookShow