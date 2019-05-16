import React, { PureComponent } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom' 

// import { connect } from 'react-redux'

import Home from './home/index'
import { Login, Register } from './loginReg/'
import Search from './searcha/'

// const mapDispatch = dispatch => {}

export default class AppUI extends PureComponent {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route path='/home' component={Home}></Route>
            <Route path='/user/login' component={Login}></Route>
            <Route path='/user/register' component={Register}></Route>
            <Route path='/shop/search' component={Search}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

// export default connect(null,mapDispatch)(AppUI)