import React from 'react'
import { Link } from 'react-router-dom'
import CurrentBookCard from '../books/CurrentBookCard'
import axios from 'axios'
import PreviousBookCard from '../books/PreviousBookCard'

class ClubShow extends React.Component {
  state = {
    clubs: null,
    currentBook: null,
    previousBooks: null
  }

  async componentDidMount(){
    const clubId = this.props.match.params.id
    
    try{
      
      const res = await axios.get(`/api/clubs/${clubId}`)
      this.setState({ clubs:res.data, currentBook:res.data.book[0], previousBooks:res.data.book.slice(1) })
      // console.log(res.data)
      // console.log(this.state.currentBook)
      // console.log(this.state.previousBooks)
    }catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state.previousBooks)
    console.log(this.state.currentBook)
    if (!this.state.previousBooks) return null
    return(
    <section>
      <h1>This is the Club Show</h1>
      <Link to={`/books/${this.state.currentBook.id}`}>
      <CurrentBookCard {...this.state.currentBook}/>
      </Link>


      <Link to={`/books/${this.state.previousBooks.id}`}>
      {this.state.previousBooks.map((previousBook, i ) => (
        <PreviousBookCard key={i} {...previousBook}/>
        
      ))}
      </Link>

    </section>
  )
  }

}

export default ClubShow