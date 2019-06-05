import React, { PureComponent } from 'react'

import { withRouter } from 'react-router-dom'

import BScroll from 'better-scroll'

import axios from 'utils/axios'

import { RecCon } from './styled'

class Recommend extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      shop: []
    }
    this.getdata = this.getdata.bind(this)
    this.getdata()
  }
  render() {
    return (
      <RecCon>
        <div>
          <img src="https://m.360buyimg.com/mobilecms/s1125x105_jfs/t19945/36/73308084/22562/8c229193/5ae3e5b0N35a42d4e.png!q70.jpg" alt=""/>
        </div>
        <div id='rec-scroll'>
          <ul>
            {
              this.state.shop.map ( value => (
                <li key={value._id} onClick={() => {this.props.history.push('/shop/detial',{shop: value})}}>
                  <span>
                  <div>
                    <img src={value.Picture[0].url} alt=""/>
                  </div>
                  <div>
                    <span> <em>￥</em>{value.UnitPrice}</span>
                    <span>{value.GoodsName}</span>
                  </div>
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
      </RecCon>
    )
  }

  async getdata() {
    let url = '/ws/api/v1/getsort'
    let {code, data} = await axios.get(url,{limit: 10})
    if( code === 200 ) {
      this.setState({
        shop: data
      })
    }
  }

  componentDidMount() {
    new BScroll('#rec-scroll',{
      click: true,
      bounce: true,
      scrollX: true
    })
  }
}

export default withRouter(Recommend)