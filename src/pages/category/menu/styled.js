import styled from 'styled-components'

export const MenuCon = styled.div`
  flex: 1;
  display: flex;
  .cate-scroll:nth-of-type(1) {
    width: .85rem;
    li {
      height: .46rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f8f8f8;
      font-size: 14px;
      color: #333;
    }
    .active {
      background: #fff;
      color: #e93b3d
    }
  }
  .cates-scroll {
    flex: 1;
    background: #fff;
    ul {
      /* min-height: 7rem; */
      padding: .07rem .1rem 0;
      display: flex;
      flex-wrap: wrap;
    }
    li {
      padding: .19rem .07rem 0;
      width: 33.33334%;
      height: 1.26rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: .7rem;
        height: .7rem
      }
      span {
        height: .35rem;
        margin-top: .02rem;
      }
    }
  }
`;