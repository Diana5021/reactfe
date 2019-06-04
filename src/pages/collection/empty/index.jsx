import React from 'react'

import { Link } from 'react-router-dom'

import {
  EmptyCon
} from './styled'

export const Empty = () => {
  return (
    <EmptyCon>
      <span>
        <img src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt=""/>
        <p>收藏夹空空如也，<Link to='/home'>去逛逛吧~</Link></p>
      </span>
    </EmptyCon>
  )
}
