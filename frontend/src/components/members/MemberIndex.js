import React from 'react'
import MemberCard from './MemberCard'
import axios from 'axios'
import Authorization from '../../lib/authorization'
// import { Link } from 'react-router-dom'


class MemberIndex extends React.Component {
state = {
  members: null,
  // users: null
}

async componentDidMount() {
  const clubId = this.props.match.params.id
  try {
    const res = await axios.get(`/api/clubs/${clubId}/`)
    console.log(res.data.member)
    this.setState({ members: res.data.member })
  } catch (error) {
    console.log(error)
  }
}

handleClick = async e => {
  e.preventDefault()

  // const userId = Authorization.getPayload().sub
  const membersArr = this.state.members
  // const clubId = this.props.match.params.id
  const userId = this.props.match.params.id
  
  // console.log(membersArr)
  try {
    // const response = await axios.get(`/api/profiles/${userId}`)
    const response = await axios.get(`/api/clubs/${userId}`)
    // const currentUser = membersArr.filter(member => member._id === userId)[0]
    // const index = membersArr.indexOf(currentUser)
    membersArr.some(member => member.id === userId) ? 
      membersArr.unshift():
      membersArr.push(response.data.member)
    this.setState({ 
      members: membersArr 
    })
  } catch (err) {
    console.log(err)
  }
}



  render() {
    console.log(this.state.members) 
    if (!this.state.members) return null
    const userId = Authorization.getPayload().sub
    return(
    <section>
      <h1>These are our members!</h1>
      <div className="member-index">
      {this.state.members.map((member, i) => (
        <MemberCard key={i} {...member}/>
      ))}

      <div className="fake-member-card">
        <img className="fake-member-pic" alt="fake-member" src="https://www.kkmm.gov.my/images/sub_bahagian/icon.png"/>
        <p>Join this club!</p>
      </div>
      </div>
      {/* {Authorization.isAuthenticated() ? */}
            <div className="buttons">
              {this.state.members.some(member => member._id === userId) ?
                <button type="button" className="button" onClick={this.handleClick}>Leave Team</button> :
                <button type="button" className="button" onClick={this.handleClick}>Join Team</button>}
              {/* {this.isOwner() && <button type="button" className="button">Edit Team</button>} */}
            </div>
            {/* : null} */}
      
    </section>
  )
  }

}

export default MemberIndex