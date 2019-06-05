import React, { PureComponent } from 'react'

import BScroll from 'better-scroll'

import { MineCon } from './styled'
import Header from 'cpts/header/'
import User from './user/'
import Steps from './steps/'


export default class Profile extends PureComponent {
  render() {
    return (
      <MineCon>
        <Header>我的</Header>
        <main className='mine-scroll'>
          <div>
            <User></User>
            <Steps></Steps>
          </div>
        </main>
      </MineCon>
    )
  }

  componentDidMount() {
    new BScroll('.mine-scroll',{
      click: true
    })
  }
}
