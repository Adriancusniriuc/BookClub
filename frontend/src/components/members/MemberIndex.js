import React from 'react'
import MemberCard from './MemberCard'
import axios from 'axios'


class MemberIndex extends React.Component {
state = {
  clubs: null
}

async componentDidMount() {
  const clubId = this.props.match.params.id
  try {
    const res = await axios.get(`/api/clubs/${clubId}/`)
    console.log(res.data.member)
    this.setState({ clubs: res.data.member })
  } catch (error) {
    console.log(error)
  }
}

  render() {
    if (!this.state.clubs) return null
    return(
    <section>
      <h1>This is the member index</h1>
      {this.state.clubs.map((club, i) => (
        <MemberCard key={i} {...club}/>
      ))}


      
    </section>
  )
  }

}

export default MemberIndex