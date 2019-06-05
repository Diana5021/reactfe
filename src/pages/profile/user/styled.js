import styled from 'styled-components'

export const UserCon = styled.div`
    padding: .1rem;
    background-color: #fff;
    >div {
      box-shadow: 0 2px 4px rgba(228,57,60,.4);
      border-radius: 6px;
      background: linear-gradient(90deg,#eb3c3c,#ff7459);
      position: relative;
      overflow: hidden;
      height: 1.2rem;
      display: flex;
      >div:nth-of-type(1) {
        width: .7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: .6rem;
        }
      }
      >div:nth-of-type(2) {
        width: 1.85rem;
        padding: .1rem .25rem;
        div {
          height: .43rem;
          font-size: 14px;
          >span {
            display: block;
            margin-top: .04rem;
            width: 100%;
            font-size: 20px; 
            color: hsla(0,0%,100%,.7);
          }
        }
      }
      >div:nth-of-type(3) {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        >div:nth-of-type(1) {
          height: .4rem;
          color: rgba(76,0,0,.7);
          font-size: 12px;
          padding-left: .05rem;
          line-height: .4rem;
          span {
            display: inline-block;
            width: .12rem;
            height: .12rem;
            position: relative;
            top: .02rem;
            right: .02rem;
            background: url(https://img11.360buyimg.com/jdphoto/s26x26_jfs/t14701/329/1603887827/338/bdda401f/5a53570bN44d2baad.png) 0px 0px / 100% 100% no-repeat;
          }
        }
        >div:nth-of-type(2) {
          position: absolute;
          right: -.02rem;
          bottom: -.1rem;
          padding: .18rem .15rem .15rem .08rem;
          transform: rotate(11deg);
          box-shadow: -0.05rem -0.05rem 0.3rem #c6934d;
          border-top-left-radius: .04rem;
          background: url(https://img11.360buyimg.com/jdphoto/s100x18_jfs/t20647/287/1260001649/632/de55fa7f/5b235f3cNbe6fe972.png) 8px 4px/50px 10px no-repeat #333;
          div {
            position: relative;
            padding: 0 .08rem 0 .05rem;
            height: .12rem;
            line-height: .12rem;
            font-size: .07rem;
            color: #cead68;
            border-radius: .12rem;
            background-color: hsla(0,0%,85.1%,.1);
          }
        }
      }
    }
    .line {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
`