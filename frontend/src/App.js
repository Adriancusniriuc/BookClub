import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SecureRoute from './components/common/SecureRoute'
import './styles/main.scss'

import Home from './components/common/Home'
import ClubIndex from './components/clubs/ClubIndex'
import ClubShow from './components/clubs/ClubShow'
import ClubCreate from './components/clubs/ClubCreate'
import ClubEdit from './components/clubs/ClubEdit'
import BookEdit from './components/books/BookEdit'
import BookCreate from './components/books/BookCreate'
import BookShow from './components/books/BookShow'
import MemberIndex from './components/members/MemberIndex'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'





class App extends React.Component {

  render(){
    return(
        <BrowserRouter>
          <Nav/>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/clubs/:id/members' component={MemberIndex}/>
          <SecureRoute path='/clubs/:id/edit' component={ClubEdit}/>
          <SecureRoute path='/clubs/create' component={ClubCreate}/>
          <Route path='/clubs/:id' component={ClubShow}/>
          <Route path='/clubs' component={ClubIndex}/>
          <SecureRoute path='/books/:id/edit' component={BookEdit}/>
          <SecureRoute path='/books/create' component={BookCreate}/>
          <Route path='/books/:id' component={BookShow}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          </Switch>
          <Footer/>
        </BrowserRouter> 
    )
  }


}

export default App
