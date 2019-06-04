import React, { PureComponent } from 'react'

import BScroll from 'better-scroll'

import Header from 'cpts/header/'
import { Swiper } from './swiper/'
import Foot from './foot/'

import { DetialCon } from './styled'

export default class Detial extends PureComponent {
  render() {
    let {shop} = this.props.location.state
    
    return (
      <DetialCon>
        <div>
          <Header {...{change: true}}>详情</Header>
        </div>
        <main className='detial-scroll'>
          <div>
            <Swiper {...shop}></Swiper>
            {/* <ShopInfo {...this.state}></ShopInfo> */}
          </div>
        </main>
        <Foot {...shop}></Foot>
      </DetialCon>
    )
  }

  componentDidMount() {
    new BScroll('.detial-scroll',{
      click: true,
      bounce: true,
      resizePolling: 60
    })
  }
}
