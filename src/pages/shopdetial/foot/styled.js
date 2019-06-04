import styled from 'styled-components'
import border from 'cpts/styled/border'


const FootCon = styled.div`
  height: .5rem;
  background: #fff;
  display: flex;
  >div:nth-of-type(1) {
    flex: 157.5;
    display: flex;
    span {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: .05rem;
        position: relative;
        span {
          position: absolute;
          top: .05rem;
          left: 100%;
          display: inline-block;
          background: #e4393c;
          color: #fff;
          font-size: 7px;
          margin-left: -10px;
          line-height: 9px;
          border-radius: 10px;
          padding: 1px 3px;
          font-weight: 700;
          color: white;
          z-index: 9999;
        }
      }
      b {
        font-size: 10px;
        color: #999;
        display: block;
        line-height: .2rem;
        height: .2rem;
        font-weight: normal
      }
    }
  }
  >div:nth-of-type(2), >div:nth-of-type(3) {
    flex: 120;
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: .5rem;
    background: #e4393c
  }
  >div:nth-of-type(2) {
    background: #ff9600
  }
`;
export const BoderFoot = border({
  component: FootCon,
  width: '1px 0 0 0',
  color: '#ccc'
})
