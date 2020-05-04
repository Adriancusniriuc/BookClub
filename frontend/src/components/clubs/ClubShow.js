import React from 'react'
import { Link } from 'react-router-dom'
import CurrentBookCard from '../books/CurrentBookCard'
import axios from 'axios'
import PreviousBookCard from '../books/PreviousBookCard'
import Authorization from '../../lib/authorization'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


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
    // console.log(this.state.currentBook)
    console.log(this.state.clubs.owner.id)
    return(
    <section>
      
      <main className="club-show">
      <div className="club-info">
      <h2>{clubs.name}</h2>
      <div className="content">
      <p><b>We meet at:</b>  {clubs.venue}, {clubs.postcode}</p>
      <p><b>When?</b>  {clubs.date}</p>
      <p><b>A bit about us:</b>  {clubs.description}</p>
      </div>

      <div className="button-div">
      <Link to={`/clubs/${clubs.id}/members/`}>
      <button >Members</button>
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

      {/* <div className="current-book"> */}
      <CurrentBookCard {...this.state.currentBook}/>
      {/* </div> */}
      </main>

      
      <h2>Previous Books:</h2>
      <div className="prev-book">
        <button type="button"><IoIosArrowBack /></button>
      {this.state.previousBooks.map((previousBook, i ) => (
        <PreviousBookCard key={i} {...previousBook} />
      ))}
      <button type="button"><IoIosArrowForward /></button>
      </div>
    </section>
  )
  }

}

export default ClubShow