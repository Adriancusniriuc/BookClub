import React from 'react'
import { Link } from 'react-router-dom'
import CurrentBookCard from '../books/CurrentBookCard'
import axios from 'axios'
import PreviousBookCard from '../books/PreviousBookCard'
import Authorization from '../../lib/authorization'

class ClubShow extends React.Component {
  state = {
    clubs: null,
    currentBook: null,
    previousBooks: null,
    loggedIn: false
  }

  async componentDidMount(){
    const clubId = this.props.match.params.id
    try{
      const { data } = await axios.get(`/api/clubs/${clubId}/`)
      this.setState({ clubs: data, currentBook: data.book.slice(-1).pop(), previousBooks: data.book.slice(0, -1) })
    } catch (error) {
      console.log(error)
    }
  }

  handleDelete = async () => {
    const clubId = this.props.match.params.id
    try {
      await axios.delete(`/api/clubs/${clubId}`, {
        headers: { Authorization: `Bearer ${Authorization.getToken()}` }
      })
      this.props.history.push('/clubs')
    } catch (err) {
      console.log(err)
    }
  }

  isClubOwner = () => {
    return Authorization.getPayload().sub === this.state.clubs.owner.id
  }

  render() {
    if (!this.state.previousBooks) return null
    if (!this.state.clubs) return null
    const clubs = this.state.clubs
    const clubId = this.props.match.params.id
    // console.log(this.state.previousBooks)
    console.log(this.state.currentBook)
    // console.log(this.state.clubs.owner.id)
    return(
    <section>
      <div className="club-info">
        <div className="club-left">
          <h1>{clubs.name}</h1>
          <p><b>We meet at:</b> {clubs.venue}, {clubs.postcode}</p>
          <p><b>When?</b>  {clubs.date}</p>
          <p><b>A bit about us:</b>  {clubs.description}</p>
        
          <div className="club-buttons">
            <Link to={`/clubs/${clubs.id}/members/`}>
            <button aria-label="View members">Members</button>
            </Link>
            {Authorization.isAuthenticated() && this.isClubOwner() ?
            <>
            <Link to={`/clubs/${clubId}/books/create/`}>
            <button>Add Book</button>
            </Link>
            <Link to={`/clubs/${clubs.id}/edit/`}>
            <button>Edit Club</button>
            </Link>
            <button
            onClick={this.handleDelete}>
              Delete Club</button>
              </>
              : console.log('this is not your club')}
          </div>
        </div>
        <div className="club-right">
        <h1>Current Book:</h1>
        <CurrentBookCard {...this.state.currentBook}/>
        </div>
      </div>
      <div className="club-bottom">
        <h1>Previous Books:</h1>
        <div className="prev-book-div">
          {this.state.previousBooks.map((previousBook, i ) => (
              <PreviousBookCard key={i} {...previousBook} />
            ))}
        </div>
      </div>
    </section>
  )
  }

}

export default ClubShow