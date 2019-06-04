import styled from 'styled-components'
import border from 'cpts/styled/border'

export const StepCon = styled.div`
  width: 1.2rem;
  height: .3rem;
  display: flex;
  i {
    flex: 1;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    text-align:center;
  }
`;

const Span = styled.span`
  width: .3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bspan = border({
  component: Span,
  width: '1px',
  raduis: '5px'
})