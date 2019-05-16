import React, { PureComponent } from 'react'

import { SearchBar } from 'antd-mobile'
import BScroll from 'better-scroll'

import { SearchCon } from './styled'

export default class Search extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      value: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <SearchCon>
        <SearchBar
          placeholder="Search" maxLength={8}
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSearch}
          onCancel={() => {this.setState({value: ''})}}
        ></SearchBar>
        <main id='search-scroll'>
          <div></div>
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
  handleSearch() {

  }
  handleChange(e) {
    this.setState({
      value: e
    })
  }
}


// bindActionCreators(action,dispatch)