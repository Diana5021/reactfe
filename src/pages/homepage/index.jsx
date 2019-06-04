import React, { PureComponent } from 'react'

import BScroll from 'better-scroll'
import _ from 'lodash'

import { HpCon } from './styled'
import HPUI from './UI'
import Header from './header/index'

export default class HomePage extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      changeColor: false
    }
  }

  render() {
    return (
      <HpCon>
        <Header {...this.state}></Header>
        <main id='hp-scroll'>
          <div>
            <HPUI></HPUI>
          </div>
        </main>
      </HpCon> 
    )
  }

  componentDidMount() {
    let bscroll = new BScroll('#hp-scroll',{
      click: true,
      bounce: true,
      pullUpLoad: {
        // 当上拉距离超过30px时触发 pullingUp 事件
        threshold: -30
      },
      resizePolling: 60
    })
    setTimeout(()=> {
      bscroll.refresh()
    },0)
    bscroll.on('scroll', _.throttle(() => {
      if (bscroll.y < 0 && !this.state.changeColor) {
        this.setState({
          changeColor: true
        })
      } else if (bscroll.y > -30 && this.state.changeColor) {
        this.setState({
          changeColor: false
        })
        return
      }
    }, 500))
  }

}
