import React, { PureComponent } from 'react'

import { CateCon } from './styled'
import Header from 'cpts/header/'
import Menu from './menu/'
import { CateHeader } from './header/'

export default class Category extends PureComponent {
  render() {
    return (
      <CateCon>
        <Header><CateHeader/></Header>
        <main>
          <Menu></Menu>
        </main>
      </CateCon>
    )
  }
}
