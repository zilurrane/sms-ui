import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminDashboardComponent from './components/admin-dashboard/dashboard'
import SignInComponent from './components/sign-in/sign-in'

class App extends Component {
  render () {
    return <Router>
      <Switch>
        <Route path='/' exact component={SignInComponent} />
        <Route path='/login' component={SignInComponent} />
        <Route path='/admin' component={AdminDashboardComponent} />
      </Switch>
    </Router>
  }
}

export default App
