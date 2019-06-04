import React, { PureComponent } from 'react'

import BScroll from 'better-scroll'

import CartItem from '../cartitem/'

import { ListCon } from './styled'

export default class CartList extends PureComponent {
  render() {
    let shopcart = this.props.cartlist
    return (
      <ListCon className='cart-scroll'>
        <div>
          {
            shopcart.map(value => (
              <CartItem key={value.getIn(['id'])}>{value}</CartItem>
            ))
          }
        </div>
      </ListCon>
    )
  }

  componentDidMount() {
    new BScroll('.cart-scroll',{
      click: true
    })
  }
}
