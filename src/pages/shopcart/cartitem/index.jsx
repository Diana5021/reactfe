import React, { PureComponent } from 'react'

import { Modal, Toast } from 'antd-mobile'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import axios from 'utils/axios'


import {
  deleteOneShop,
  changeOneNumber,
  changeOneChosen,
  setFavoriteSeco,
  changeOneFavorite,
  deleteFavorite
} from 'store/list/actionCreator'

import Stepper from 'cpts/stepper/'

import { CICon } from './styled'

const alert = Modal.alert

const mapState = state => ({
  favoritelist: state.getIn(['list','favoritelist'])
})

const mapDispatch = dispatch => ({
  changeOne(id) {
    dispatch(changeOneChosen(id))
  },
  deteleOne(id) {
    dispatch(deleteOneShop(id))
  },
  changeNum({id,num}) {
    dispatch(changeOneNumber({id,num}))
  },
  addFavorite(shop) {
    dispatch(setFavoriteSeco(shop))
  },
  changeFavorite(id) {
    dispatch(changeOneFavorite(id))
    dispatch(deleteFavorite())
  }
})

class CartItem extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      num: 1,
      favorite: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
    this.getshop = this.getshop.bind(this)
  }
  render() {
    let data = !!this.props.children ? this.props.children : new Map({})
    return (
      <CICon>
        <i onClick={this.handleClick}>
        {
          data.getIn(['isChosen']) ? 
          (<svg viewBox="0 0 1024 1024" width="25" height="25"><path d="M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m216 374.4L470.4 697.6c-1.6 1.6-4.8 3.2-6.4 4.8-1.6 0-1.6 1.6-3.2 1.6-3.2 1.6-8 1.6-12.8 1.6-4.8 0-8-1.6-12.8-3.2-1.6 0-1.6-1.6-3.2-1.6-1.6-1.6-4.8-3.2-6.4-4.8l-126.4-129.6c-12.8-12.8-12.8-33.6 0-44.8 12.8-12.8 33.6-12.8 44.8 0l104 107.2 233.6-236.8c12.8-12.8 33.6-12.8 44.8 0 14.4 12.8 14.4 33.6 1.6 46.4z" fill="#d81e06" p-id="3259"></path></svg>)
          :
          (<svg viewBox="0 0 1024 1024" width="20" height="20"><path d="M512 960C265 960 64 759 64 512S265 64 512 64s448 201 448 448-201 448-448 448z m0-866.5C281.3 93.5 93.5 281.3 93.5 512S281.3 930.5 512 930.5 930.5 742.7 930.5 512 742.8 93.5 512 93.5z" fill="#8a8a8a" p-id="4082"></path></svg>)           
        }
        </i>
        <span onClick={this.getshop}>
          <img src={data.getIn(['img'])} alt=""/>
        </span>
        <div className='cartinfo'>
          <span>
            {data.getIn(['name'])}
          </span>
          
          <p>类型：{(data.getIn(['type']) === 1 ? '生活用品' 
            : 
            (data.getIn(['type']) === 2 ? '学习用品' : data.getIn(['type']) === 3 ? '零食' : '水果'))}</p>
          <div className='cart-price'>
            <span>￥<em>{data.getIn(['price']).split('.')[0]}</em>.{data.getIn(['price']).split('.')[1]}</span>
            <Stepper {...this.props}>{data}</Stepper>
          </div>
          <i>
            <span onClick={this.handleFavorite}>
              {
                this.state.favorite ? (<>已收藏</>) : (<>加入收藏</>)
              }
            </span>
            <span onClick={this.handleDelete}>删除</span>
          </i>
        </div>
      </CICon>
    )
  }

  static getDerivedStateFromProps(props) {
    let  data = (props.favoritelist).toJS()
    return {
      favorite: !!(data.find(value => {
        return value.id === props.children.getIn(['id'])
      }))
    }
  }

  handleClick() {
    let id = this.props.children.getIn(['id'])
    this.props.changeOne(id)
  }
  handleDelete() {
    let id = this.props.children.getIn(['id'])
    alert('Delete', '是否确认删除此商品？', [
      { text: '返回', onPress: () => {} },
      { text: '删除', onPress: () => {this.props.deteleOne(id)}, style: {color: 'red'} },
    ]) 
  }
  handleFavorite() {
    let shop = this.props.children.toJS()
    let id = this.props.children.getIn(['id'])
    if(!this.state.favorite) {
      this.props.addFavorite(shop)
      Toast.success('收藏成功',1)
    } else {
      this.props.changeFavorite(id)
      Toast.offline('取消收藏',1)
    }
    this.setState({
      favorite: !this.state.favorite
    })
  }

  async getshop() {
    let url = '/ws/api/v1/item'
    let id = this.props.children.getIn(['id'])
    let { code, data} = await axios.get(url,{id})
    if( code === 200) {
      this.props.history.push('/shop/detial',{shop: data[0]})
    } else {
      return
    }
  }
}

export default withRouter(connect(mapState,mapDispatch)(CartItem))