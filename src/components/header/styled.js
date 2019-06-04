import styled from 'styled-components'

import border from 'cpts/styled/border'

const Header = styled.div`
  height: .45rem;
  background:  ${props=> (props.change ? 'transparent' : '#fff')};
  display: flex;
  >div:nth-of-type(2) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #333;
  }
`;


export const HeaderCon = border({
  component: Header,
  width: '0 0 1px 0',
  color: '#e5e5e5'
}) 


export const BackCon = styled.div`
  width: .44rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MoreCon = styled.div`
  width: .4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ul {
    position: absolute;
    width: 1.25rem;
    top: .53rem;
    right: .1rem;
    z-index: 1000;
    border-radius: 4px;
    background: rgba(0,0,0,.9);
    li {
      height: .4rem;
      text-align: center;
      line-height: .4rem;
      color: #fff;
      border-bottom: 1px solid hsla(0,0%,100%,.2);
    }
  }
  .show {
    display: none
  }
`