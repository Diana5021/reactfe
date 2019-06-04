import React, { PureComponent } from 'react'

import {
  BoderFoot
} from './styled'

import { connect } from 'react-redux'

import { Toast } from 'antd-mobile'

import { withRouter } from 'react-router-dom'
import {  
  setCart,
  setFavorite,
  changeOneFavorite,
  deleteFavorite
} from 'store/list/actionCreator'

const mapState = state => ({
  userinfo: state.getIn(['users','userinfo']),
  cartlist: state.getIn(['list','cartlist']),
  favoritelist: state.getIn(['list','favoritelist'])
})

const mapDispatch = dispatch => ({
  setcart(shop) {
    dispatch(setCart(shop))
  },
  setfavorite(shop) {
    dispatch(setFavorite(shop))
  },
  changeFavorite(id) {
    dispatch(changeOneFavorite(id))
    dispatch(deleteFavorite())
  }
})

class Foot extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      favorite: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
    // // this.handleBuy = this.handleBuy.bind(this)
  }
  render() {
    let num = this.props.cartlist.size
    return (
      <BoderFoot>
        <div>
          <span onClick={this.handleFavorite}>
            <i>
              {
                (this.state.favorite) ?
                <svg viewBox="0 0 1024 1024" width="25" height="20"><path d="M786.31 1003.35c-11.093 0-23.893-3.755-34.987-9.217L511.707 874.325 270.043 994.133c-23.893 12.971-55.296 11.094-77.482-5.461s-34.987-46.08-29.526-73.728l49.835-258.048L23.089 479.915c-20.31-20.31-27.648-51.712-20.31-77.483 9.216-27.648 31.403-47.957 60.758-51.541l263.68-47.958 118.1-239.786c12.972-25.771 38.742-42.326 66.39-42.326s55.296 16.555 66.39 42.326l117.93 239.616 263.68 46.08c27.648 3.754 51.542 23.893 59.05 51.541 9.217 27.648 1.878 57.173-18.431 77.483L810.203 656.896l47.958 258.048c5.46 29.525-7.34 57.173-29.526 73.728-10.922 9.216-25.77 14.677-42.325 14.677z" fill="#d81e06" p-id="2712"></path></svg>
                :
                <svg viewBox="0 0 1024 1024" width="25" height="20"><path d="M773.458 1005.43c-14.403 0-30.592-4.132-45.599-11.638L513.567 886.61 297.948 993.618c-13.655 7.27-29.286 11.09-45.225 11.09a96.164 96.164 0 0 1-57.549-18.842c-30.177-22.64-45.64-61.85-38.502-97.561l44.099-228.772L31.744 501.996a104.059 104.059 0 0 1-26.281-100.66l0.338-1.162c12.288-36.828 42.772-62.633 79.734-67.584l234.839-42.7L425.779 75.811c16.932-33.895 51.37-55.675 87.788-55.675 37.99 0 73.318 22.6 88.13 56.29l105.068 213.4L941.64 330.89a95.672 95.672 0 0 1 78.264 68.373 98.97 98.97 0 0 1-24.474 101.002l-0.578 0.579-168.55 158.72L868.9 888.745c6.86 36.649-7.716 73.672-38.062 96.742a90.409 90.409 0 0 1-57.38 19.943z m-259.81-196.055l227.667 113.853c6.686 3.37 14.392 5.489 19.665 5.489 8.116 0 15.652-2.499 21.187-7.117l1.03-0.85c12.937-9.707 19.245-25.134 16.414-40.238l-45.814-246.804 181.212-170.65c11.126-11.28 14.93-27.433 9.995-42.286l-0.497-1.562a37.31 37.31 0 0 0-30.971-27.003l-1.034-0.163L661.76 348.21 548.91 118.99c-5.478-12.805-20.347-22.098-35.359-22.098-14.75 0-28.861 9.236-36.009 23.496L365.414 348.109l-252.062 45.788c-15.31 1.92-27.203 12.088-32.697 27.945-3.901 14.49 0.722 31.949 11.372 42.834l181.422 169.057-47.61 246.933c-2.863 14.28 3.9 30.714 16.409 40.1 6.272 4.715 14.397 7.316 22.917 7.316 6.569 0 12.866-1.531 18.294-4.45l0.783-0.46 229.407-113.797z" p-id="2335" fill="#707070"></path></svg>
              }
            </i>
            <b>收藏</b>
          </span>
          <span onClick={() => { this.props.history.push('/home/cart') }}>
            <i>
              <svg viewBox="0 0 1024 1024" width="25" height="20"><path d="M366.4 846.528a78.528 78.528 0 0 0 117.568 68.032c24.256-14.016 39.104-39.872 39.104-68.032a78.336 78.336 0 1 0-156.672 0M728.704 846.528a78.592 78.592 0 0 0 117.632 68.032c24.256-14.016 39.104-39.872 39.104-68.032a78.336 78.336 0 1 0-156.736 0M938.816 706.88H306.176a22.464 22.464 0 0 1-21.888-17.024l-135.104-545.92H24.064a22.528 22.528 0 1 1 0-44.992h142.656a22.4 22.4 0 0 1 21.824 17.088l135.104 545.92h595.136l55.616-449.472h-595.2a22.592 22.592 0 0 1 0-45.056h620.8c6.528 0 12.48 2.752 16.896 7.616a22.208 22.208 0 0 1 5.376 17.664l-61.12 494.464a22.656 22.656 0 0 1-22.336 19.712z" fill="#707070" p-id="7797"></path></svg>
              {
                (num > 0) ? (<span>{num}</span>) : (<></>)
              }
            </i>
            <b>购物车</b>
          </span>
        </div>
        <div onClick={this.handleClick}>加入购物车</div>
        <div >立即购买</div>
      </BoderFoot>
    )
  }

  static getDerivedStateFromProps(props) {
    let  data = (props.favoritelist).toJS()
    return {
      favorite: !!(data.find(value => {
        return value.id === props._id
      }))
    }
  }

  handleFavorite() {
    if(!this.state.favorite) {
      this.props.setfavorite(this.props)
      Toast.success('收藏成功',1)
    } else {
      this.props.changeFavorite(this.props._id)
      Toast.offline('取消收藏',1)
    }
    this.setState({
      favorite: !this.state.favorite
    })
  }

  handleClick() {
    if( this.props.userinfo.getIn(['code']) === 200 ) {
      this.props.setcart(this.props)
      Toast.success('加入购物车成功', 1)
    } else {
      Toast.fail('请先登录',1)
    }
    
  }
}

export default withRouter(connect(mapState,mapDispatch)(Foot))