import React, { PureComponent } from 'react'

import { SearchBar } from 'antd-mobile'
import BScroll from 'better-scroll'

import axios from 'utils/axios'
import Shopitem from './shopitem/'

import { SearchCon } from './styled'

export default class Search extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      value: '',
      isshow: true,
      shop: []
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }
  render() {
    return (
      <SearchCon>
        <div>
          <SearchBar
            placeholder="Search" maxLength={8}
            value={this.state.value}
            onChange={this.handleChange}
            onSubmit={this.handleSearch}
            onCancel={() => {this.setState({value: ''})}}
          ></SearchBar>
        </div>
        <main id='search-scroll'>
          <div>
            {
              this.state.isshow ? 
              (<>ssss</>) 
              : 
              (<>
                {
                  this.state.shop.length < 0 ? 
                  (<>没有找到</>)
                  :
                  (<>
                    {
                      this.state.shop.map(value => (
                        <Shopitem key={value._id} {...value}></Shopitem>
                      ))
                    }
                  </>)
                }
              </>)
            }
          </div>
        </main>
      </SearchCon>
    )
  }
  componentDidMount() {
    new BScroll('#search-scroll',{
      click: true,
      bounce: true,
    })
  }
  async handleSearch() {
    if(this.state.value) {
      let url = '/ws/api/v1/getname'
      let { code, data } = await axios.get(url,{key: this.state.value})
      console.log(data)
      if(code === 200) {
        this.setState({
          shop: data
        })
      }
      this.setState({
        isshow: false
      })
    } else {
      this.setState({
        isshow: true
      })
    }
     
    
    
  }
  handleChange(e) {
    this.setState({
      value: e
    })
  }

  handleShow(value) {
   
  }
}


// bindActionCreators(action,dispatch)