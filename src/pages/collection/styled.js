import styled from 'styled-components'

export const CollCon = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    >p {
      height: .4rem;
      padding: 0 .1rem;
      font-size: 12px;
      color: #666;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        color: #e93b3d;
      }
    }
    >div {
      flex: 1;
      overflow: hidden
    }
    
    .chosen-btn {
      position: absolute;
      height: .5rem;
      display: none;
      width: 100%;
      bottom: 0;
      left: 0;
      background: #F5F5F9;
      z-index: 10;
      &.active {
        display: block;
      }
      div {
        display: flex;
        height: 100%;
        justify-content: space-between;
        i {
          width: .4rem;
          display: flex; 
          flex-direction: column;
          text-align: center;
          font-size: 10px;
          color: #999;
          span {
            height: .32rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        >span {
          width: 1.1rem;
          line-height: .5rem;
          font-size: 16px;
          text-align: center;
          font-weight: 700;
          background: #e4393c;
          color: #fff;
        }
      }
    }
  }
`
