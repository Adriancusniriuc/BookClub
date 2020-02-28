import React from 'react'
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
    if (!this.state.previousBooks) return null
    return(
    <section>
      <h1>This is the Club Show</h1>
      <CurrentBookCard {...this.state.currentBook}/>
      {this.state.previousBooks.map(previousBook => (
        <PreviousBookCard key={previousBook.id} {...previousBook}/>
      ))}
      

    </section>
  )
  }

}

export default ClubShow