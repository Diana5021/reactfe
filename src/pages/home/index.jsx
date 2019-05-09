import React, { PureComponent } from 'react'
import { 
  NavLink,
  Route
} from 'react-router-dom'

import fetch from 'utils/fetch'

import { HomeCon, TabCon } from './styled'

import HomePage from 'pages/homepage/index'

export default class Home extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      haslogin: false
    }
    this.checkLogin = this.checkLogin.bind(this)
    this.checkLogin()
  }
  render() {
    let num = 2
    return (
      <HomeCon>
        <main>
          <Route exact path='/home' component={HomePage}></Route>
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
            this.state.haslogin ? 
            ( <NavLink activeClassName='selected' className='profile' to='/home/profile'></NavLink> )
            :
            ( <NavLink className='unlogin' to='/user/login'></NavLink> )
          }
        </TabCon>
      </HomeCon>
    )
  }

  async checkLogin() {//{ code, data }
    let url = '/ws/api/v1/users/author'
    let postData = { token: localStorage.token }
    let data = await fetch.post({url,postData})
    console.log(data)
    data.code === 200 ? 
    this.setState({
      haslogin: true
    })
    : 
    this.setState({
      haslogin: false
    })
    
  }
}
