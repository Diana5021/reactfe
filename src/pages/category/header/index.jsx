import React from 'react'

import { 
  HeaderCon 
} from './styled'

import { Link } from 'react-router-dom'
export const CateHeader = () => (
  <HeaderCon>
    <Link to='/shop/search'>
      <i className='search-icon'></i>
      <input type="text" placeholder="快来搜一搜吧" readOnly unselectable="on"/>
    </Link>
  </HeaderCon>
)
