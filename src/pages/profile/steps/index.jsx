import React, { PureComponent } from 'react'

import { StepCon } from './styled'

export default class Steps extends PureComponent {
  render() {
    return (
      <StepCon>
        <div>
          <div>
            <span>
              <img src='https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png' alt=''/> 
            </span>
            <span>待付款</span>
          </div>
          <div>
            <span>
              <img src='https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png' alt=''/> 
            </span>
            <span>待收货</span>
          </div>
          <div>
            <span>
              <img src='https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png' alt=''/> 
            </span>
            <span>退款/售后</span>
          </div>
          <div>
            <span>
              <img src='https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png' alt=''/> 
            </span>
            <span>全部订单</span>
          </div>
        </div> 
        <div>
          <div>
            <span>
            </span>
            <span>商品收藏</span>
          </div>
          <div>
            <span>
            </span>
            <span>退款/售后</span>
          </div>
          <div>
            <span>
            </span>
            <span>全部订单</span>
          </div>
        </div> 
      </StepCon>
    )
  }
}
