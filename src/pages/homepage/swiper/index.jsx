import React, { PureComponent } from 'react'


import { Carousel } from 'antd-mobile'

import fetch from 'utils/fetch'

import { SwiperCon } from './styled'

export default class Swiper extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      imgs: [{
        img: "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/23694/9/13580/93775/5ca1b97cEe28c4f0f/5a27b96c74e7169b.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        name: "第一张图片",
        _id: "5cd8d31150cfb42c78618bdf"
      }]
    }
    this.getImg()
  }
  render() {
    return (
      <SwiperCon>
        <Carousel
          autoplay={true}
          infinite
          speed={200}
          autoplayInterval= {5000}
          resetAutoplay={false}
          dotStyle = {{
            background:'transparent',
            border: '1px solid #fff',
            boxSizing: 'border-box',
            borderRadius: '7px',
            height: '6px',
            width: '6px',
         }}
         dotActiveStyle = {{
            background: '#fff',
            boxSizing: 'border-box',
            borderRadius: '7px',
            height: '6px',
            width: '6px',
         }}
        >
        {
          (this.state.imgs).map(value => (
            <img key={value._id} src={value.img} alt={value.name}/>
          ))
        }
        </Carousel>
      </SwiperCon>
    )
  }
  
  async getImg() {
    let { data } = await fetch.get('/ws/api/v1/imgs/')
    this.setState({
      imgs: data
    })
  }
  
}
