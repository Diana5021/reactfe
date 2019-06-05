import React, { PureComponent } from 'react'

import {
  withRouter
} from 'react-router-dom'

import { UserCon } from './styled'

class User extends PureComponent {
  render() {
    return (
      <UserCon>
        <div>
          <div onClick={() =>{}}>
            <img src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png" alt=""/>
          </div>
          <div>
            <div>
              <span className='line'>设置昵称</span>
            </div>
            <div className='line'>用户名：琉星落月</div>
          </div>
          <div>
            <div>
              <span >
              </span>
              账号管理
            </div>
            <div>
              <div>
                年卡特惠价
              </div>
            </div>
          </div>
        </div>
      </UserCon>
    )
  }
}

export default withRouter(User)