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
    })
    bscroll.on('scroll', _.throttle(() => {
      if (bscroll.y < 0 && !this.state.changeColor) {
        this.setState({
          changeColor: true
        })
      } else if (this.bscroll.y > -30 && this.state.changeColor) {
        this.setState({
          changeColor: false
        })
        return
      }
    }, 1000))
  }

}
