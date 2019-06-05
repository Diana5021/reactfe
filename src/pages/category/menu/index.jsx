import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import BScroll from 'better-scroll'
import axios from 'utils/axios'
import { MenuCon } from './styled'

class Menu extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      shop: [],
      active: '最新上架',
      catelogyList: ['最新上架','热门推荐','生活用品','零食','水果','学习用品']
    }
    this.handleClick = this.handleClick.bind(this)
    this.getshop = this.getshop.bind(this)
    this.getshop()
  }

  render() {
    return (
      <MenuCon>
        <i className='cate-scroll'>
          <ul>
            {
              this.state.catelogyList.map(value => (
                <li key={value}
                  className={
                    this.state.active === value ? 'active' : ''
                  }
                  onTouchStart = { this.handleClick }
                >{value}</li>
              ))
            }
          </ul>
        </i>
        <i className='cates-scroll'>
          <ul>
            {
              (this.state.shop).map(value => (
                <li key={value._id} onClick={()=> {this.props.history.push('/shop/detial',{shop: value})}}>
                  <img src={value.Picture[0].url} alt=''/>
                  <span>{value.GoodsName}</span>
                </li>
              ))
            }
          </ul>
        </i>
      </MenuCon>
    )
  }

  componentDidMount() {
    new BScroll('.cate-scroll',{
      click: true
    })
    new BScroll('.cates-scroll',{
      click: true
    })
  }

  async handleClick(e) {
    this.setState({
      active: e.target.innerHTML
    },() => { this.getshop()})
   
  }

  async getshop() {
    let shop, url, data
    switch (this.state.active) {
      case '最新上架' :
        url = '/ws/api/v1/getsort'
        data = await axios.get(url,{limit: 10})
        if( data.code === 200 ) {
          shop = data.data
        }
      break;
      case '热门推荐' :
        url = '/ws/api/v1/getsort'
        data = await axios.get(url,{limit: 20})
        if( data.code === 200 ) {
          shop = data.data
        }
      break;
      case '生活用品' :
        url = '/ws/api/v1/getcateg'
        data = await axios.get(url,{categ: 1})
        if( data.code === 200 ) {
          shop = data.data
        }
      break;
      case '学习用品' :
        url = '/ws/api/v1/getcateg'
        data = await axios.get(url,{categ: 2})
        if( data.code === 200 ) {
          shop = data.data
        }
      break;
      case '零食' :
        url = '/ws/api/v1/getcateg'
        data = await axios.get(url,{categ: 3})
        if( data.code === 200 ) {
          shop = data.data
        }
      break;
      case '水果' :
        url = '/ws/api/v1/getcateg'
        data = await axios.get(url,{categ: 4})
        if( data.code === 200 ) {
          shop = data.data
        }
      break;

      default:
        shop = []
        break;
    }
    this.setState({shop})
  }
}


export default withRouter(Menu)