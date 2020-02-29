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
    const clubs = this.state.clubs
    if (!this.state.previousBooks) return null
    return(
    <section>
      <h1>{clubs.name}</h1>

      <div className="club-info">
      <p>{clubs.venue}</p>
      <p>{clubs.postcode}</p>
      <p>{clubs.date}</p>
      <p>{clubs.description}</p>


      <Link to={`/clubs/${clubs.id}/members/`}>
      <button >Members</button>
      </Link>

      <Link to={`/books/create/`}>
      <button>Next Book</button>
      </Link>

      <Link to={`/clubs/${clubs.id}/edit/`}>
      <button>Club Edit</button>
      </Link>

      <Link to={`/clubs/`}>
      <button>Delete</button>
      </Link>

      </div>

      <div className="current-book-card">
      <CurrentBookCard {...this.state.currentBook}/>
      </div>

      <div className="previous-book-card">
      {this.state.previousBooks.map((previousBook, i ) => (
        <PreviousBookCard key={i} {...previousBook}/>
      ))}
      </div>
      

    </section>
  )
  }

}

export default ClubShow