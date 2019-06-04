import styled from 'styled-components';

export const CICon = styled.div`
  height: 1.4rem; 
  padding: .05rem;
  padding-bottom: 0; 
  margin: .1rem 0;
  background: #ffffff;
  display: flex;
  >i {
    width: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  >span {
    padding: .05rem;
    img {
      height: .8rem;
    }
  }
  .cartinfo {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    > span {
      height: .4rem;
      width: 100%;
      line-height: .2rem;
      font-size: 14px;
      line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: #fff;
      height: .25rem;
      font-size: 14px;
      color: #666;
      margin: .05rem 0 .05rem 0;
      padding: .01rem .25rem .01rem .05rem;
      border: 1px solid #e5e5e5;
      border-radius: .02rem;
    }
    .cart-price {
      height: .3rem;
      margin-top: .05rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      >span {
        color: #e93b3d;
        font-size: 10px;
        em {
          font-size: 16px;
        }
      }
      .am-stepper.showNumber {
        width: 1.2rem;
        height: .3rem;
        padding: 0;
        .am-stepper-handler {
          box-sizing: border-box;
        } 
      }
    }
    i {
      height: .12rem;
      margin-top: .1rem;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: #999;
      span {
        padding: 0 .1rem;
      }
    }
  }

`;
