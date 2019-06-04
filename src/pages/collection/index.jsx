import React, { PureComponent } from 'react'

import BScroll from 'better-scroll'
import { connect } from 'react-redux'

import { Modal } from 'antd-mobile'


import Header from 'cpts/header/'

import {
  CollCon 
} from './styled'

import CollItem from './collitem/'
import { Empty } from './empty/'


import { changeAllFavorite, deleteFavorite } from 'store/list/actionCreator'

const alert = Modal.alert

const mapState = state => ({
  favoritelist: state.getIn(['list','favoritelist'])
})

const mapDispatch = dispatch => ({
  changeChosen(isChosen) {
    dispatch(changeAllFavorite(isChosen))
  },
  delete() {
    dispatch(deleteFavorite())
  }
})

class Collect extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      edit: true,
      delete: false
    }
    this.handlerchosen = this.handlerchosen.bind(this)
    this.handlerdelete = this.handlerdelete.bind(this)
    this.hanlderClick = this.hanlderClick.bind(this)
  }

  static getDerivedStateFromProps(props) {
    return {
      delete: props.favoritelist.toJS().every(value => {
        return value.isChosen
      })
    }
  }
  render() {
    return (
      <CollCon>
        <Header>我的收藏</Header>
        <main>
          {
            (this.props.favoritelist.size > 0) ? 
            (<>
               <p>
                <span>共 <i>{this.props.favoritelist.size}</i> 件商品</span>
                <i onClick={this.hanlderClick}>
                  {
                    this.state.edit ? (<>编辑</>) : (<>完成</>)
                  }
                </i>
              </p>
              <div className='coll-scroll'>
                <div>
                {
                    this.props.favoritelist.map(value => (
                      <CollItem key={value.getIn(['id'])} {...this.state}>{value}</CollItem>  
                    )) 
                }
                </div>
              </div>
              <div className={this.state.edit ? 'chosen-btn' : 'chosen-btn active'}>
                <div>
                <i onClick={this.handlerchosen}>
                  <span>
                  {
                    this.state.delete ? 
                    (<svg viewBox="0 0 1024 1024" width="25" height="25"><path d="M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m216 374.4L470.4 697.6c-1.6 1.6-4.8 3.2-6.4 4.8-1.6 0-1.6 1.6-3.2 1.6-3.2 1.6-8 1.6-12.8 1.6-4.8 0-8-1.6-12.8-3.2-1.6 0-1.6-1.6-3.2-1.6-1.6-1.6-4.8-3.2-6.4-4.8l-126.4-129.6c-12.8-12.8-12.8-33.6 0-44.8 12.8-12.8 33.6-12.8 44.8 0l104 107.2 233.6-236.8c12.8-12.8 33.6-12.8 44.8 0 14.4 12.8 14.4 33.6 1.6 46.4z" fill="#d81e06" p-id="3259"></path></svg>)
                    :
                    (<svg viewBox="0 0 1024 1024" width="20" height="20"><path d="M512 960C265 960 64 759 64 512S265 64 512 64s448 201 448 448-201 448-448 448z m0-866.5C281.3 93.5 93.5 281.3 93.5 512S281.3 930.5 512 930.5 930.5 742.7 930.5 512 742.8 93.5 512 93.5z" fill="#8a8a8a" p-id="4082"></path></svg>)           
                  }
                  </span>
                  全选
                </i>
                <span onClick={this.handlerdelete}>取消收藏</span>
                </div>
              </div>
            </>)
            :
            (<Empty></Empty>)
          }
        </main>
      </CollCon>
    )
  }

  componentDidMount() {
    if( this.props.favoritelist.size > 0 ) {
      new BScroll('.coll-scroll',{
        click: true
      })
    }
  }

  handlerchosen() {
    this.setState({
      delete: !this.state.delete
    })
    this.props.changeChosen(!this.state.delete)
  }

  handlerdelete() {
    alert('Delete', '是否确认取消收藏？', [
      { text: '返回', onPress: () => {} },
      { text: '确认', onPress: () => this.props.delete(), style: {color: 'red'} },
    ])
  }

  hanlderClick() {
    this.setState({edit: !this.state.edit})
    this.props.changeChosen(false)
  }
}

export default connect(mapState, mapDispatch)(Collect)