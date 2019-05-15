import React, { Component } from 'react'

import { Grid } from 'antd-mobile'

import { GridCon } from './styled'

const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

export default class Grids extends Component {
  render() {
    return (
      <GridCon>
        <Grid data={data} hasLine={false} />
      </GridCon>
    )
  }
}
