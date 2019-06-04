import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import axios from 'utils/axios'

import {
  CitemCon 
} from './styled'

import { changeOneFavorite } from 'store/list/actionCreator'

const mapDispatch = dispatch => ({
  changeChosen(id) {
    dispatch(changeOneFavorite(id))
  }
})

class CollItem extends PureComponent {
  constructor(props) {
    super(props)
    this.handlerClick = this.handlerClick.bind(this)
    this.getshop = this.getshop.bind(this)
  }
  render() {
    let {edit} = this.props
    let shop = this.props.children
    let isChosen = shop.getIn(['isChosen'])
    return (
      <CitemCon>
        <i className={edit? '' : 'active'} onClick={this.handlerClick}>
        {
          (isChosen) ? 
          (<svg viewBox="0 0 1024 1024" width="25" height="25"><path d="M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m216 374.4L470.4 697.6c-1.6 1.6-4.8 3.2-6.4 4.8-1.6 0-1.6 1.6-3.2 1.6-3.2 1.6-8 1.6-12.8 1.6-4.8 0-8-1.6-12.8-3.2-1.6 0-1.6-1.6-3.2-1.6-1.6-1.6-4.8-3.2-6.4-4.8l-126.4-129.6c-12.8-12.8-12.8-33.6 0-44.8 12.8-12.8 33.6-12.8 44.8 0l104 107.2 233.6-236.8c12.8-12.8 33.6-12.8 44.8 0 14.4 12.8 14.4 33.6 1.6 46.4z" fill="#d81e06" p-id="3259"></path></svg>)
          :
          (<svg viewBox="0 0 1024 1024" width="20" height="20"><path d="M512 960C265 960 64 759 64 512S265 64 512 64s448 201 448 448-201 448-448 448z m0-866.5C281.3 93.5 93.5 281.3 93.5 512S281.3 930.5 512 930.5 930.5 742.7 930.5 512 742.8 93.5 512 93.5z" fill="#8a8a8a" p-id="4082"></path></svg>)           
        }
        </i>
        <div>
          <img src={shop.getIn(['img'])} alt=""  onClick={this.getshop}/>
          <div>
            <p className="name">{shop.getIn(['name'])}</p>
            <p className="info">
              类型：{(shop.getIn(['type']) === 1 ? '生活用品' 
              : 
              (shop.getIn(['type']) === 2 ? '学习用品' : shop.getIn(['type']) === 3 ? '零食' : '水果'))}
            </p>
            <p className='price'>￥<i>{shop.getIn(['price']).split('.')[0]}</i>.{shop.getIn(['price']).split('.')[1]}</p>
          </div>
        </div>
      </CitemCon>
    )
  }
  handlerClick() {
    this.props.changeChosen(this.props.children.getIn(['id']))
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

export default withRouter(connect(null, mapDispatch)(CollItem))