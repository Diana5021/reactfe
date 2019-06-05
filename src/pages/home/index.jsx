import React, { PureComponent } from 'react'
import { 
  NavLink,
  Route
} from 'react-router-dom'

import { connect } from 'react-redux'

// import fetch from 'utils/fetch'
import { getUserASync } from 'store/login/actionCreator'

import { HomeCon, TabCon } from './styled'

import HomePage from 'pages/homepage/'
import Category from 'pages/category/'
import Shopcart from 'pages/shopcart/'
import Profile from 'pages/profile/'

const mapState = state => ({
  userinfo: state.getIn(['users','userinfo']),
  cartlist: state.getIn(['list','cartlist'])
})

const mapDispatch = dispatch => ({
  checkLogin() {
    dispatch(getUserASync())
  }
})

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.props.checkLogin()
  }
  render() {
    let num = this.props.cartlist.size
    return (
      <HomeCon>
        <main>
          <Route exact path='/home' component={HomePage}></Route>
          <Route exact path='/home/categ' component={Category}></Route>
          <Route exact path='/home/cart' component={Shopcart}></Route>
          <Route exact path='/home/profile' component={Profile}></Route>
        </main>
        <TabCon>
          <NavLink exact activeClassName='selected' className='homepage' to='/home'></NavLink>
          <NavLink activeClassName='selected' className='categ' to='/home/categ'></NavLink>
          <NavLink activeClassName='selected' className='cart' to='/home/cart'>
          {
            (num > 0) ? (<span>{num}</span>) : (<></>)
          }
          </NavLink>
          {        
            ( this.props.userinfo.getIn(['code']) === 200 ) ? 
            ( <NavLink activeClassName='selected' className='profile' to='/home/profile'></NavLink> )
            :
            ( <NavLink className='unlogin' to='/user/login'></NavLink> )
          }
        </TabCon>
      </HomeCon>
    )
  }
}

export default connect(mapState,mapDispatch)(Home)