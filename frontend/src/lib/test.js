
// import React from 'react'
// import { Link, withRouter } from 'react-router-dom'
// import { notify } from 'react-notify-toast'
// import Authorization from '../../../lib/authorization'


// class Nav extends React.Component {
//   state = { loggedIn: false }



//   toggleNavbar = () => {
//     this.setState({ loggedIn: !this.state.loggedIn })
//   }

//   handleLogout = () => {
//     Authorization.logout()
//     notify.show('You\'ve logged out!', 'custom', 3000, { background: 'FFFFF0' })
//     this.props.history.push('/')
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.location.pathname !== prevProps.location.pathname) {
//       this.setState({ loggedIn: false })
//     }   
//   }

//   render() {

//     return (
      
//       <nav className="navbar">    
//         <Link className="nav-item" to="/">Home</Link>
//         <Link className="nav-item" to="/pubs">Pubs</Link>
//         <Link className="nav-item" to="/events">Events</Link>
//         {!Authorization.isAuthenticated() && <Link className="nav-item"  to="/login">Login</Link>}
//         {!Authorization.isAuthenticated() && <Link className="nav-item"  to="/register">Register</Link>}
//         {Authorization.isAuthenticated() && <span onClick={this.handleLogout} ><Link className="nav-item" to="/">Logout</Link></span>}

//       </nav> 
//     )
    
//   }

// }



// export default withRouter(Nav)


// // import React from 'react'
// // import { Link, withRouter } from 'react-router-dom'
// // import Auth from '../../lib/auth'
// // import logo from '../../assets/logo-via-logohub2.png'
// // class NavBar extends React.Component {
// //   state = { navOpen: false }
// //   toggleNavbar = () => {
// //     this.setState({ navOpen: !this.state.navOpen })
// //   }
// //   handleLogout = () => {
// //     Auth.logout()
// //     this.props.history.push('/')
// //   }
// //   componentDidUpdate(prevProps) {
// //     if (this.props.location.pathname !== prevProps.location.pathname) {
// //       this.setState({ navOpen: false })
// //     }
// //   }
// //   render() {
// //     return (
// //       <nav className="navbar is-info">
// //         <div className="container">
// //           <div className="navbar-brand">
// //             <Link className="navbar-item" to="/">
// //             <img src={logo} alt={logo} />
// //             </Link>
// //             <a href="/#"
// //               className={`navbar-burger ${this.state.navOpen ? 'is-active' : ''}`}
// //               onClick={this.toggleNavbar}
// //             >
// //               <span aria-hidden="true"></span>
// //               <span aria-hidden="true"></span>
// //               <span aria-hidden="true"></span>
// //             </a>
// //           </div>
// //           <div className={`navbar-menu ${this.state.navOpen ? 'is-active' : ''}`}>
// //             <div className="navbar-end">
// //             <Link className="navbar-item is-family-code" to="/maps">HiveMap</Link>
// //               <Link className="navbar-item is-family-code" to="/places">HiveList</Link>
// //               {!Auth.isAuthenticated() && <Link className="navbar-item is-family-code" to="/register">Signup</Link>}
// //               {!Auth.isAuthenticated() && <Link className="navbar-item is-family-code" to="/login">Login</Link>}
// //               {Auth.isAuthenticated() && <Link className="navbar-item is-family-code" to="/places/new">Add to the Hive</Link>}
// //               {Auth.isAuthenticated() && <a href="/#" onClick={this.handleLogout} className="navbar-item">Logout</a>}
// //             </div>
// //           </div>
// //         </div>
// //       </nav> 
// //     )
// //   }
// // }
// // export default withRouter(NavBar)




// // import React from 'react'
// // import Auth from '../../lib/auth'
// // import axios from 'axios'
// // import { Link } from 'react-router-dom'
// // // import GroupAmend from './GroupAmend'
// // class GroupCard extends React.Component {
// //   state = {
// //     group: {
// //       group_name: '',
// //       attendees: [],
// //       event: {},
// //       owner: {},
// //       id: ''
// //     },
// //     errors: {}
// //   }
// //   isOwner = () => Auth.getPayload().sub === this.state.group.owner.id
// //   async componentDidMount() {
// //     const groupId = this.props.id
// //     const eventId = this.props.event.id
// //     try {
// //       const response = await axios.get(`/api/events/${eventId}/event_groups/${groupId}/`)
// //       this.setState({ group: response.data })
// //     } catch (error) {
// //       this.setState({ errors: error.response.data.errors })
// //     }
// //   }
// //   handleClick = async e => {
// //     e.preventDefault()
// //     const userId = Auth.getPayload().sub
// //     const attendeesArray = this.state.group.attendees
// //     try {
// //       const user = await axios.get(`/api/user/${userId}`)
// //       const currentUser = attendeesArray.filter(attendee => attendee.id === userId)[0]
// //       const index = attendeesArray.indexOf(currentUser)
// //       attendeesArray.some(attendee => attendee.id === user.data.id) ?
// //         attendeesArray.splice(index, 1) :
// //         attendeesArray.push(user.data)
// //       this.setState({ attendees: attendeesArray })
// //       this.handleSubmit()
// //     } catch (err) {
// //       console.log(err.response.data)
// //     }
// //   }




// //   handleSubmit = async e => {
// //     const { group } = this.state
// //     const sendData = {
// //       group_name: group.group_name,
// //       attendees: group.attendees.map(attendee => attendee.id),
// //       event: group.event,
// //       owner: group.owner,
// //       id: group.id
// //     }
// //     const groupId = this.props.id
// //     const eventId = this.props.event.id
// //     try {
// //       await axios.put(`/api/events/${eventId}/event_groups/${groupId}/`, sendData, {
// //         headers: { Authorization: `Bearer ${Auth.getToken()}` }
// //       })
// //     } catch (err) {
// //       console.log(err.response.data)
// //     }
// //   }







  
// //   deleteGroup = async () => {
// //     const groupId = this.props.id
// //     const eventId = this.props.event.id
// //     console.log(this.props)
// //     try {
// //       await axios.delete(`/api/events/${eventId}/event_groups/${groupId}/`, {
// //         headers: { Authorization: `Bearer ${Auth.getToken()}` }
// //       })
// //       window.location.reload(false)
// //     } catch (err) {
// //       console.log(err)
// //     }
// //   }
// //   render() {
// //     const userId = Auth.getPayload().sub
// //     const { group } = this.state
// //     const lead = group.attendees[0]
// //     return (
// //       <>
// //         <div className="card">
// //           <div className="card-info">
// //             <h2>{group.group_name}</h2>
// //           </div>
// //           {lead && <h3>Leader: {lead.username}</h3>}
// //           {group.attendees !== null ?
// //             <h3>Attendees: {group.attendees.map((attendee, i) => {
// //               return <li key={i}><Link to={`/user/${attendee.id}`}>{attendee.username}</Link></li>
// //             })}</h3>
// //             : null}
// //           {group.attendees !== null ?
// //             (Auth.isAuthenticated() ?
// //               <div className="buttons">
// //                 {group.attendees.some(attendee => attendee.id === userId) ?
// //                   <div>
// //                     <button type="button" className="button" onClick={this.handleClick}>Leave</button>
// //                   </div> :
// //                   <div>
// //                     <button type="button" className="button" onClick={this.handleClick}>Join</button>
// //                   </div>}
// //                 {this.isOwner() && <div>
// //                   <Link to={`/events/${group.event.id}/event_groups/${group.id}/amend`}>
// //                     <button type="button" className="button">Change Group Info</button>
// //                   </Link>
// //                   <button onClick={this.deleteGroup} type="button" className="button">Delete Group</button>
// //                 </div>
// //                 }
// //               </div>
// //               : null)
// //             : null}
// //         </div>
// //       </>
// //     )
// //   }
// // }
// // export default GroupCard









// // // async componentDidMount() {
// // //   const clubId = this.props.match.params.id
// // //   try {
// // //     const res = await axios.get(`/api/clubs/${clubId}/`)
// // //     console.log('this is res .data.member', res.data.member)
// // //     this.setState({ members: res.data.member })
// // //   } catch (error) {
// // //     console.log(error)
// // //   }
// // // }




// //       {/* <div className="fake-member-card">
// //         <img className="fake-member-pic" alt="fake-member" src="https://www.kkmm.gov.my/images/sub_bahagian/icon.png"/>
// //         <p>Join this club!</p>
// //       </div> */}






// //NAVBVAR



// // import React from 'react'
// // import { Link} from 'react-router-dom'
// // // import Authorization from '../../lib/authorization'


// // class Nav extends React.Component {


// //   // state = { navOpen: false }
// //   // toggleNavbar = () => {
// //   //   this.setState({ navOpen: !this.state.navOpen })
// //   // }
// //   // handleLogout = () => {
// //   //   Authorization.logout()
// //   //   this.props.history.push('/')
// //   // }
// //   // componentDidUpdate(prevProps) {
// //   //   if (this.props.location.pathname !== prevProps.location.pathname) {
// //   //     this.setState({ navOpen: false })
// //   //   }
// //   //   }

// //   render() {

// //     return(
// //       <nav className='nav'>
// //         <Link to='/'>Home</Link>
// //         <Link to='/clubs'>Clubs</Link>
// //         <Link to='/login'>Login</Link>
// //         <Link to='/register'>Register</Link>
// //         {/* <div>
// //         <a href="/#"
// //               className={`navbar-burger ${this.state.navOpen ? 'is-active' : ''}`}
// //               onClick={this.toggleNavbar}
// //             >
// //               <span aria-hidden="true"></span>
// //               <span aria-hidden="true"></span>
// //               <span aria-hidden="true"></span>
// //             </a>
// //             </div> */}

// //         {/* {!Authorization.isAuthenticated() &&<Link to='/login'>Login</Link>}
// //         {!Authorization.isAuthenticated() &&<Link to='/register'>Register</Link>}
// //         {Authorization.isAuthenticated() && <a href="/#" onClick={this.handleLogout} className="navbar-item">Logout</a>} */}
        

// //       </nav>
// //   )
// //   }

// // }
// // export default Nav
// // // export default withRouter(Nav)