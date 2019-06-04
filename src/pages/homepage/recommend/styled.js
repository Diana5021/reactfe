import styled from 'styled-components'

export const RecCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -.13rem;
  >div:nth-of-type(1) {
    height: .35rem;
    img {
      height:  100%
    }
  }
  >div:nth-of-type(2) {
    flex: 110;
    background: #ffffff;
  ul {
    height: 100%;
    width: 8.5rem;
    li{
      height: 100%;
      width: .8rem;
      display: inline-block;
      padding-bottom: .11rem;
      margin-left: .04rem;
      span {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div:nth-of-type(1) {
          height: .71rem;
          padding: 0 .05rem;
          img {
            height: 100%;
            width: 100%;
          }
        }
        div:nth-of-type(2) {
          height: .5rem;
          padding: 0 .05rem;
          overflow: hidden;
          span:nth-of-type(1) {
            margin-top: .1rem;
            display: block;
            color: #f23030;
            font-size: 16px;
            line-height: .16rem;
            height: .16rem;
            text-align: center;
            font-weight: 700;
            em {
              display: inline-block;
              width: .11rem;
              font-size: 11px;
              padding-right: .02rem;
            }
          }
          span:nth-of-type(2) {
            color: #686868;
            font-size: 16px;
            line-height: .2rem;
            height: .2rem;
            margin-top: .04rem;
            text-align: center;
            padding: 0 .02rem;
            display: block;
            text-align: center;
          }  
        }
      }
    }
  }
  }
`