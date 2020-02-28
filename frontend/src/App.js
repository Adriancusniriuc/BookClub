import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import ClubIndex from './components/clubs/ClubIndex'
import ClubShow from './components/clubs/ClubShow'
import ClubCreate from './components/clubs/ClubCreate'
import ClubEdit from './components/clubs/ClubEdit'
import BookCreate from './components/books/BookCreate'
import MemberIndex from './components/members/MemberIndex'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'



class App extends React.Component {

  render(){
    return(
      <main>
        <BrowserRouter>
          <Nav/>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/clubs/:id/members' component={MemberIndex}/>
          <Route path='/clubs/:id/edit' component={ClubEdit}/>
          <Route path='/clubs/create' component={ClubCreate}/>
          <Route path='/clubs/:id' component={ClubShow}/>
          <Route path='/clubs' component={ClubIndex}/>
          <Route path='/books/create' component={BookCreate}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          </Switch>
          <Footer/>
        </BrowserRouter> 
      </main>
    )
  }

}

export default App
