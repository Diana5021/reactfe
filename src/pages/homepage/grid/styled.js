import styled from 'styled-components'

export const GridCon = styled.div`
  height: 1.62rem;
  position: relative;
  background: #fff;
  top: -.13rem;
  border-radius: .1rem .1rem 0 0;
  overflow: hidden;
  display: flex ;
  flex-wrap: wrap;
  a {
    width: 25%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    div {
      width: .45rem;
      height: .45rem;
      display: flex;
      border-radius: 50%;
      background: #A0EEE1;
      justify-content:center;
      align-items: center;
    }
    span {
      margin-top: .03rem;
      font-size: .06rem;
      color: #666;
    }
  }
`