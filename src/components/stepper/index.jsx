import React, { Component } from 'react'

import {
  StepCon,
  Bspan
} from './styled'

export default class Stepper extends Component {
  constructor(props) {
    super(props) 
    this.state= {
      num: this.props.children.getIn(['num'])
    }

    this.handlerChange = this.handlerChange.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  render() {
    return (
      <StepCon>
        <Bspan onClick={this.handleMinus}>
          <svg viewBox="0 0 1024 1024" width="15" height="15"><path d="M945.230769 590.769231H78.769231c-43.323077 0-78.769231-35.446154-78.769231-78.769231s35.446154-78.769231 78.769231-78.769231h866.461538c43.323077 0 78.769231 35.446154 78.769231 78.769231s-35.446154 78.769231-78.769231 78.769231z" p-id="2779" fill="#515151"></path></svg>
        </Bspan>
        <i>
          <input type="number" 
            defaultValue={this.state.num} 
            onChange={this.handlerChange} 
            // min="1" 
            // max="99" 
            ref="Dom"/>
        </i>
        <Bspan onClick={this.handleAdd}>
          <svg viewBox="0 0 1024 1024" width="15" height="15"><path d="M457.142857 457.142857v-402.285714a54.857143 54.857143 0 0 1 109.714286 0v402.285714h402.285714a54.857143 54.857143 0 0 1 0 109.714286h-402.285714v402.285714a54.857143 54.857143 0 0 1-109.714286 0v-402.285714h-402.285714a54.857143 54.857143 0 0 1 0-109.714286h402.285714z" fill="#515151" p-id="1950"></path></svg>
        </Bspan>
      </StepCon>
    )
  }

  handlerChange() {
    if(~~this.refs.Dom.value <=0) {
      this.refs.Dom.value = 1
    } 
    if(~~this.refs.Dom.value >=10) {
      this.refs.Dom.value = 10
    } 
    this.setState({
      num: ~~this.refs.Dom.value
    },() => {this.getNum()})
  }
  handleMinus() {
    if(this.state.num <= 1) return
    this.setState({
      num: --this.refs.Dom.value
    },() => {this.getNum()})
  }

  handleAdd() {
    if(this.state.num >= 10) return
    this.setState({
      num: ++this.refs.Dom.value
    },() => {this.getNum()})
  }

  getNum() {
    this.props.changeNum({id:this.props.children.getIn(['id']), num:this.state.num})
  }
}
