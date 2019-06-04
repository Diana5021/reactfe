import styled from 'styled-components';

export const EmptyCon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    height: 1.85rem;
    width: 100%;
    text-align: center;
    img {
      height: .9rem;
    }
    p {
      font-size: 16px;
      color: rgba(51,51,51,.66);
      line-height: .24rem;
      margin: .11rem 0;
    }
  }
`;