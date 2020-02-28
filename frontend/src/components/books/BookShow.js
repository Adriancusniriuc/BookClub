import React from 'react'
import axios from 'axios'


class BookShow extends React.Component {
  state = {
    books: null,
    // comments: []
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

  render(){
    if (!this.state.books) return null
    const comments = this.state.books.comments.text
    console.log(this.state.books.comments)
    return(
      <section>

      <h1>Book Show</h1>
  <div>
    <img src={this.state.books.image}/>
    {/* <p>{this.state.books.comments.text}</p> */}
  {this.state.books.comments.map((comment, i) => (
        <p key={i}>{comment.text}</p>
      ))}
      
    
  </div>
    

    
      
      </section>
    )
  }
}


export default BookShow