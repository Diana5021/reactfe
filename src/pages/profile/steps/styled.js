import styled from 'styled-components'

export const StepCon = styled.div`
  >div {
    display: flex;
    background: #fff;
    margin: .15rem 0;
   
    div {
      flex: 1;
      height: .72rem;
      display: flex;
      flex-direction: column;
      span {
        flex: 1;
        text-align: center;
        line-height: .36rem;
        img {
          width: .2rem;
        }
        &:nth-of-type(2) {
          color: #666;
          font-size: 12px;
        }
      }
    }
  }
  >div:nth-of-type(2) {
    span:nth-of-type(1) {
      color:#e93b3d;
      font-size: 16px;
      i {
        font-size: 10px;
      }
    }
  }
  >div:nth-of-type(3) {
    span:nth-of-type(1) {
      font-size: 16px;
      font-weight: 700;
    }
  }
  >div:nth-of-type(4) {
    flex-wrap: wrap;
    div {
      min-width: 25%;
      max-width: 25%
    }
  }

  >div:nth-of-type(1) {
    div:last-of-type {
      position: relative;
    }
    div:last-of-type:before {
      position: absolute;
      z-index: 1;
      top: 0;
      left: -.05rem;
      width: .1rem;
      height: .72rem;
      background: url(https://img11.360buyimg.com/jdphoto/s20x144_jfs/t14743/330/1610539369/321/10d659d3/5a53580eNa26a8177.png) 0 0/10px;
      content: "";
    }
  }

`;