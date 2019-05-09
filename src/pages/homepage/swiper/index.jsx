import React, { PureComponent } from 'react'


import { Carousel } from 'antd-mobile'

import { SwiperCon } from './styed'

export default class Swiper extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      imgs: []
    }
  }
  render() {
    return (
      <SwiperCon>
        <Carousel
         autoplay = {true}
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
            <img key={value.id} src={value.img} alt='lll'/>
          ))
        }
        </Carousel>
      </SwiperCon>
    )
  }
  
  
}
