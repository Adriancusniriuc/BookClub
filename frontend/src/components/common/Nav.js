import React from 'react'
import { Link } from 'react-router-dom'


class Nav extends React.Component {

  render() {

    return(
      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/clubs'>Clubs</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
  )
  }

}

export default Nav