import React, { PureComponent } from 'react'
import _ from 'lodash'

import { ItemContainer } from './styled'

export default class Shopitem extends PureComponent {
  render() {
    let data = _.cloneDeep(this.props)
    delete data.history
    let price = this.props.UnitPrice.toFixed(2)
    return (
      <ItemContainer onClick={()=> {this.props.history.push('/shop/detial',{shop: data})}}>
        <div>
          <img src={this.props.Picture[0].url} alt=""/>
        </div>
        <span>
          {this.props.Description}
        </span>
        <p>
          <span>
            ￥<i>{price.split('.')[0]}</i><i>.{price.split('.')[1]}</i>
          </span>
        </p>
        <p></p>
      </ItemContainer>
    )
  }
}
