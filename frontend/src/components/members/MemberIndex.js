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
      <h1>These are our members!</h1>
      <div className="member-index">
      {this.state.clubs.map((club, i) => (
        <MemberCard key={i} {...club}/>
      ))}

      <div className="fake-member-card">
        <img className="fake-member-pic" alt="fake-member" src="https://www.kkmm.gov.my/images/sub_bahagian/icon.png"/>
        <p>Join this club!</p>
      </div>
      </div>

      
    </section>
  )
  }

}

export default MemberIndex