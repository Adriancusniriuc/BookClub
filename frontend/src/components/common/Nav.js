import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Authorization from '../../lib/authorization'

class Nav extends React.Component {
  state = { loggedIn: false }

  toggleNavbar = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
    
  }

  handleLogout = () => {
    Authorization.logout()
    // notify.show('You\'ve logged out!', 'custom', 3000, { background: 'FFFFF0' })
    this.props.history.push('/')
  }
  

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ loggedIn: true })
    }   
  }

  render() {
    
    return(
      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/clubs'>Clubs</Link>
        {!Authorization.isAuthenticated() && <Link to='/login'>Login</Link>}
        {!Authorization.isAuthenticated() && <Link to='/register'>Register</Link>}
    
        {Authorization.isAuthenticated() && <span onClick={this.handleLogout} ><Link className="nav-item" to="/">Logout</Link></span>}
      </nav>
  )
  }

}
export default withRouter(Nav)
// export default Nav