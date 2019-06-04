import React, { PureComponent } from 'react'

import {
  BtnCon
} from './styled'

import {
  withRouter
} from 'react-router-dom'

import { connect } from 'react-redux'

import {
  changeChosen,
  // setOrderfromCart,
  // deleteOrder
} from 'store/list/actionCreator'

const mapDispatch = dispatch => ({
  changeAllChosen(isChosen) {
    dispatch(changeChosen(isChosen))
  },
  // readytoBuy() {
  //   dispatch(deleteOrder())
  //   dispatch(setOrderfromCart())
  // }
})

class Btns extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isChosen: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.handlerBuy = this.handlerBuy.bind(this)
  }
  static getDerivedStateFromProps(props,state) {
    return {
      isChosen: props.cartlist.toJS().every(value => {
        return value.isChosen
      })
    }
  }

  render() {
    let shopcart = this.props.cartlist
    let list = shopcart.toJS().filter(value => {
      return value.isChosen === true
    })
    let num = list.reduce((sum, value) => {
      return sum + value.num
    },0)
    let price = list.reduce((sum,value) => {
      return sum + value.num*value.price
    },0).toFixed(2)
    return (
      <BtnCon>
        <i onClick={this.handleClick}>
          <span>
            {
              this.state.isChosen ? 
              (<svg viewBox="0 0 1024 1024" width="25" height="25"><path d="M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m216 374.4L470.4 697.6c-1.6 1.6-4.8 3.2-6.4 4.8-1.6 0-1.6 1.6-3.2 1.6-3.2 1.6-8 1.6-12.8 1.6-4.8 0-8-1.6-12.8-3.2-1.6 0-1.6-1.6-3.2-1.6-1.6-1.6-4.8-3.2-6.4-4.8l-126.4-129.6c-12.8-12.8-12.8-33.6 0-44.8 12.8-12.8 33.6-12.8 44.8 0l104 107.2 233.6-236.8c12.8-12.8 33.6-12.8 44.8 0 14.4 12.8 14.4 33.6 1.6 46.4z" fill="#d81e06" p-id="3259"></path></svg>)
              :
              (<svg viewBox="0 0 1024 1024" width="20" height="20"><path d="M512 960C265 960 64 759 64 512S265 64 512 64s448 201 448 448-201 448-448 448z m0-866.5C281.3 93.5 93.5 281.3 93.5 512S281.3 930.5 512 930.5 930.5 742.7 930.5 512 742.8 93.5 512 93.5z" fill="#8a8a8a" p-id="4082"></path></svg>)           
            }
          </span>
          全选
        </i>
        <p>
          总计:<b>¥{price}</b>
          <small>总额¥{price} 立减¥0.00</small>
        </p>
        <div onClick={this.handlerBuy}>去结算 <em>({num}件)</em></div>
      </BtnCon>
    )
  }
  handleClick() {
    this.props.changeAllChosen(!this.state.isChosen)
  }

  handlerBuy() {
    // this.props.history.push('/order')
    // this.props.readytoBuy()
  }
}

export default withRouter(connect(null,mapDispatch)(Btns))