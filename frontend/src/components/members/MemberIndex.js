import React from 'react'
import MemberCard from './MemberCard'
import axios from 'axios'
import Authorization from '../../lib/authorization'
import { headers } from  '../../lib/headers'


class MemberIndex extends React.Component {
state = {
  clubs:{
    name: '',
    venue: '',
    postcode: '',
    date: '',
    description: '',
    maxspace: '',
    member: [],
    book: [],
    owner: {}
}
}


getData = async () => {
  const clubId = this.props.match.params.id
  
  try {
    const res = await axios.get(`/api/clubs/${clubId}/`)
    this.setState({ members: res.data.member, clubs: res.data })
    // const memberId = this.state.members
    // console.log('here', memberId)
  } catch (error) {
    console.log(error)
  }
  }

componentDidMount() {
  this.getData()
}


handleClick = async e => {
  e.preventDefault()
  const userId = Authorization.getPayload().sub
  const membersArr = this.state.members
  try {
    const user = await axios.get(`/api/user/`, headers)
    const currentUser = membersArr.filter(member =>
      member.id === userId)
    const index = membersArr.indexOf(currentUser)
    membersArr.some(member => member.id === userId) ? 
    membersArr.splice(index, 1) :
    membersArr.push(user.data)
    this.setState({  members: membersArr })
    this.handleSubmit()
  } catch (err) {
    console.log(err)
  } 
}

handleSubmit = async e => {
  const clubId = this.props.match.params.id
  const { clubs } = this.state
  const pkArr = []
  clubs.member.map(memb => pkArr.push(memb.id))

  const bookPkArr = []
  clubs.book.map(bk => bookPkArr.push(bk.id))
  // console.log(clubs.member)
  const sendData = {
    name: clubs.name,
    venue: clubs.venue,
    postcode: clubs.postcode,
    date: clubs.date,
    description: clubs.description,
    maxspace: clubs.maxspace,
    member: pkArr.map(pk => pk),
    book: bookPkArr.map(book => book),
    owner: clubs.owner
  }
  try {
    await axios.put(`/api/clubs/${clubId}/`, sendData, headers) 
  } catch (error) {
    console.log(error.response.data)
  }
}

  render() {
    if (!this.state.members) return null
    const userId = Authorization.getPayload().sub
    console.log(userId)
    return(
    <section>
      <h1>These are our members!</h1>
      <div className="member-index">
      {this.state.members.map((member, i) => (
        <MemberCard key={i} {...member}/>
      ))}
      </div>
      {/* {Authorization.isAuthenticated() ? */}
            <form>
              {this.state.members.some(member => member.id === userId) ?
                <button type="button" onClick={this.handleClick}>Leave Club</button> :
                <button type="button" onClick={this.handleClick}>Join Club</button>}
              {/* {this.isOwner() && <button type="button" className="button">Edit Club Atendees</button>} */}
            </form>
           {/* : null} */}
      
    </section>
  )
  }

}

export default MemberIndex