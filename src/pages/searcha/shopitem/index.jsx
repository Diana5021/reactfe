import React, { PureComponent } from 'react'

import { withRouter } from 'react-router-dom'

import _ from 'lodash'
import { SitemCon } from './styled'

class Shopitem extends PureComponent {
  render() {
    let shop = this.props
    let data = _.cloneDeep(this.props)
    delete data.history
    let price = shop.UnitPrice.toFixed(2)
    return (
      <SitemCon onClick={() => { this.props.history.push('/shop/detial',{shop: data})}}>
        <div>
          <img src={shop.Picture[0].url} alt=""  onClick={this.getshop}/>
          <div>
            <p className="name">{shop.Description}</p>
            <p className="info">
              类型：{(shop.GoodsType === 1 ? '生活用品' 
              : 
              (shop.GoodsType === 2 ? '学习用品' : shop.GoodsType === 3 ? '零食' : '水果'))}
            </p>
            <p className='price'>￥<i>{price.split('.')[0]}</i>.{price.split('.')[1]}</p>
          </div>
        </div>
      </SitemCon>
    )
  }
}

export default withRouter(Shopitem)
