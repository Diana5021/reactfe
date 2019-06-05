import styled from 'styled-components';

export const SitemCon = styled.div`
  height: 1.25rem;
  background: #fff;
  overflow: hidden;
  margin: .1rem;
  display: flex;
  >div {
    flex: 1;
    padding: .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
    }
    >div {
      flex: 1;
      height: 100%;
      padding: 0 .1rem;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .name {
        height: .42rem;
        font-size: 14px;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        word-break: break-all;
      }
      .info {
        height: .25rem;
        line-height: .25rem;
        color: #999;
        font-size: 12px;
        line-clamp: 1;
        -webkit-line-clamp: 1;
      }
      .price {
        height: .2rem;
        line-height: .2rem;
        margin-top: .1rem;
        font-size: 10px;
        color: #e4393c; 
        i {
          font-size: 18px;
        }
      }
    }
  }
`