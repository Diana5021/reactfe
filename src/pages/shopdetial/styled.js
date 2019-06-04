import styled from 'styled-components'

export const DetialCon = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  >div:nth-of-type(1) {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index:999;
  }
  main {
    flex: 1;
    overflow: hidden
  }
`;