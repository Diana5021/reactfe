import styled from 'styled-components'

export const HeaderCon = styled.div`
  background: #f7f7f7;
  height: .3rem;
  width: 100%;
  border-radius: .3rem;
  padding: 0 .3rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    display: block;
    width: .18rem;
    height: .15rem;
    background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline) no-repeat;
    background-position: -.8rem 0;
    background-size: 2rem;
    position: relative;
    z-index: 1;
  }
  input {
    flex: 1; 
    border: 0;
    background: 0 0;
    font-size: .12rem;
    color: #232326;
    padding-left: .05rem;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    height: auto;
    margin: 0 0 0 5px;
    vertical-align: middle;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70% !important;
    line-height: 30px;
  }
    
 
`;



