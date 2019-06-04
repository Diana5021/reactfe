import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { CartCon } from './styled'
import Header from 'cpts/header/'
import { Empty } from './empty/'
import CartList from './cartlist/'
import Btn from './buttons/'

const mapState = state => ({
  cartlist: state.getIn(['list','cartlist'])
})

class Shopcart extends PureComponent {
  render() {
    let num = this.props.cartlist.size
    return (
      <CartCon>
        <Header>购物车</Header>
        <main>
          {
            ( num === 0 ) 
            ? 
            (<Empty></Empty>) 
            :
            (<><CartList {...this.props}></CartList>
              <Btn {...this.props}></Btn></>)
          }
        </main>
      </CartCon>
    )
  }
}

export default connect(mapState)(Shopcart)