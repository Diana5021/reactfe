import React from 'react'
import { Carousel } from 'antd-mobile'
import { SwiperCon } from './styled'
export const Swiper = (props) => {
  return (
    <SwiperCon>
      <Carousel
      dotStyle = {{
        width: '4px',
        height: '4px',
        background: "rgba(0,0,0,.3)",
        borderRadius: '5px'
      }}
      dotActiveStyle = {{
        width: '4px',
        height: '4px',
        borderRadius: '5px',
        background: '#e93b3d'
      }}
      >
        {
          (props.Picture).map(value => (
            <img key={value.id} src={value.url} alt=''/>
          ))
        }
      </Carousel>
    </SwiperCon>
  )
}