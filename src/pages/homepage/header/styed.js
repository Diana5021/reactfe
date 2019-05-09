import styled from 'styled-components'

export const HeaderCon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: .44rem;
  display: flex;
  background:  ${props=> (props.changeColor ? '#E43130' : 'transparent')};
  z-index: 999;
  span {
    width: .44rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  >div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    >div {
      width: 95%;
      height: 75%;
      background: #fff;
      display: flex;
      border-radius: .5rem;
      padding: .02rem .1rem .02rem .05rem;
      i { 
        width: .33rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      input {
        flex: 1;
        border: none;
        outline:none;
        padding-left: .1rem;
      }
    }
  }
`