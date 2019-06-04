import styled from 'styled-components';
import border from 'cpts/styled/border'

const BtnCons = styled.div`
  height: .5rem;
  display: flex;
  i {
    width: .4rem;
    text-align: center;
    font-size: 10px;
    color: #999;
    display: flex;
    flex-direction: column;
    span {
      height: .32rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  p {
    flex: 1;
    text-align: right;
    padding: .1rem .1rem 0 0;
    font-size: 16px;
    font-weight: 700;
    line-height: .16rem;
    b{
      color: #e93b3d;
      font-weight: normal;
      padding: 0 .05rem;
    }
    small {
      padding-top: .02rem;
      display: block;
      font-size: 10px;
      color: #999;
      font-family: arial;
      font-weight: 400;
    }
  }
  div { 
    width: 1.1rem;
    line-height: .5rem;
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    background: #e4393c;
    color: #fff;
    em {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

export const BtnCon = border({
  component: BtnCons,
  width: '1px 0 0 0',

})