import React, { PureComponent } from 'react'

import { withRouter } from 'react-router-dom'

import axios from 'utils/axios'

import ShopItem from './shopitem'
import { ListCon } from './styled'

class List extends PureComponent {
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
        <div>
          <img src="https://m.360buyimg.com/mobilecms/s1125x105_jfs/t20104/64/569675001/24655/accee8b1/5afec048N9fbcb7fb.png!q70.jpg" alt=""/>
        </div>
        <ul>
          {
            this.state.shop.map(value => (
              <ShopItem {...value} key={value._id}  history ={this.props.history}/>
            )) 
          }
        </ul>
      </ListCon>
    )
  }
  async getshop() {
    let url = '/ws/api/v1/getsort'
    let {code, data} = await axios.get(url,{limit: 20})
    if( code === 200 ) {
      this.setState({
        shop: data
      })
    }
  }
}

export default withRouter(List)
