import React, { PureComponent } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom' 

import { connect } from 'react-redux'

import {  
  getSeCart,
  getSeFavorite,
} from 'store/list/actionCreator'

import Home from './home/index'
import { Login, Register } from './loginReg'
import Search from './searcha'
import Detial from './shopdetial'
import Collect from './collection'

const mapDispatch = dispatch => ({
  getcart() {
    dispatch(getSeCart())
    dispatch(getSeFavorite())
    // dispatch(getSeOrder())
  }
})

class AppUI extends PureComponent {
  constructor(props) {
    super(props) 
    this.props.getcart()
  } 
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
            <Route path='/shop/detial' component={Detial}></Route>
            <Route path='/shop/collect' component={Collect}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default connect(null,mapDispatch)(AppUI)