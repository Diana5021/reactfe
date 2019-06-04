import styled from 'styled-components'

export const ListCon = styled.div`
  overflow: hidden;
  >div:nth-of-type(1) {
    height: .35rem;
    img {
      height:  100%
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const ItemContainer = styled.li`
  width: 49.6%;
  background: #fff;
  margin-bottom: .04rem;
  div {
    height: 1.86rem;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  span {
    height: .31rem;
    font-size: 13px;
    color: #232326;
    margin-top: .05rem;
    line-height: .16rem;
    margin-bottom: .03rem;
    padding: 0 .04rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    img {
      width: auto;
      height: .13rem;
      display: inline-block;
      position: relative;
      top: 0;
      padding-right: .04rem;
      line-height: .13rem;
    }
  }
  p {
      height: .26rem;
      font-size: 13px;
      overflow: hidden;
      padding: 0 .08rem 0 .04rem;
  }
  p:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    >span:nth-of-type(1) {
      color: #f23030;
      height: .25rem;
      line-height: .25rem;
      text-align: center;
      i:nth-of-type(1){
        font-size: 16px;
      }
    }
  }

`