import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { HeaderCon, BackCon, MoreCon } from './styled'

import { getUserASync } from 'store/login/actionCreator'

const mapState = state => ({
  userinfo: state.getIn(['users','userinfo'])
})
const mapDispatch = dispatch => ({
  checkLogin() {
    dispatch(getUserASync())
  }
})

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isshow: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.props.checkLogin()
  }
  render() {
    return (
      <HeaderCon {...this.props}>
        <BackCon onClick={() => {this.props.history.goBack()}}>
          <svg t="1554627380357" viewBox="0 0 1024 1024" version="1.1" width="20" height="20"><defs><style type="text/css"></style></defs><path d="M715.305453 1021.376951L219.840573 525.912071a88.892228 88.892228 0 0 1 0-29.144993L715.305453 1.302198a82.18888 82.18888 0 0 1 29.144993 0l58.289985 58.289986a73.445382 73.445382 0 0 1 0 29.144993L394.71053 496.767078a26.521944 26.521944 0 0 0 0 29.144993l408.029901 408.029901a73.736832 73.736832 0 0 1 0 29.144993l-58.289985 58.289986a76.068432 76.068432 0 0 1-29.144993 0z" p-id="1985" fill="#707070"></path></svg>
        </BackCon>
        <div>
          {this.props.children}
        </div>
        <MoreCon onClick={() => {this.setState({ isshow: !this.state.isshow })}}>
          <svg t="1554645694318"  viewBox="0 0 1024 1024" width="20" height="20"><defs><style type="text/css"></style></defs><path d="M112.993942 412.324504c-54.854971 0-99.614681 44.88134-99.614681 99.614681 0 54.854971 44.88134 99.614681 99.614681 99.614681 54.854971 0 99.614681-44.88134 99.614681-99.614681 0-54.854971-44.75971-99.614681-99.614681-99.614681z m797.160708 0c-54.854971 0-99.614681 44.88134-99.614681 99.614681 0 54.854971 44.88134 99.614681 99.614681 99.614681 54.854971 0 99.614681-44.88134 99.614681-99.614681 0-54.854971-44.88134-99.614681-99.614681-99.614681z m-398.580354 0c-54.854971 0-99.614681 44.88134-99.614681 99.614681 0 54.854971 44.88134 99.614681 99.614681 99.614681 54.854971 0 99.614681-44.88134 99.614681-99.614681 0-54.854971-44.88134-99.614681-99.614681-99.614681z m0 0" p-id="2243" fill="#707070"></path></svg>
          <ul className={this.state.isshow ? '' : 'show'}>
            <li onClick={() => {this.props.history.push('/home')}}>首页</li>
            <li onClick={() => {this.props.history.push('/home/categ')}}>分类搜索</li>
            <li onClick={() => {this.props.history.push('/home/cart')}}>购物车</li>
            <li onClick={this.handleClick}>
              {
                 ( this.props.userinfo.getIn(['code']) === 200 ) ? '我的' : '登录'
              }
            </li>
          </ul>
        </MoreCon>
      </HeaderCon>
    )
  }
  handleClick() {
    if( this.props.userinfo.getIn(['code']) === 200 ) {
      this.props.history.push('/home/profile')
    } else {
      this.props.history.push('/user/login')
    }
  }
}
export default withRouter(connect(mapState,mapDispatch)(Header))