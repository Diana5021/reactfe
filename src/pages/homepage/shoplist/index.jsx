import React, { PureComponent } from 'react'

import axios from 'utils/axios'

import { ListCon } from './styled'

export default class List extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      shop:[]
    }
    this.getshop = this.getshop.bind(this)
    this.getshop()
  }
  render() {
    return (
      <ListCon>
        
      </ListCon>
    )
  }
  async getshop() {
    let data = await axios.get('/ws/api/v1/',{pageSize: 20})
  }
}
