import styled from 'styled-components';

import colors from '../../assets/colors';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: white;
  position: relative;

  > .bg {
    height: 100%;
    width: 50%;
    color: #ffffff;
    position: absolute;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    z-index: 1;

    > img {
      width: 100%;
      height: 100%;
    }
  }

  > .left,
  > .right {
    display: grid;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  > .left {
    align-content: center;
    grid-template-columns: 1fr repeat(6, 80px);

    @media screen and (min-width: 1366px) {
      grid-template-columns: 1fr repeat(6, 95px);
    }
    @media screen and (min-width: 1920px) {
      grid-template-columns: 1fr repeat(6, 135px);
    }
  }

  > .right {
    background: white;
    font-size: 30px;
    grid-row-gap: 50px;
    align-content: center;
    grid-template-columns: repeat(6, 80px) 1fr;
    
    @media screen and (min-width: 1366px) {
      grid-template-columns: repeat(6, 95px) 1fr;
    }

    @media screen and (min-width: 1920px) {
      grid-template-columns: repeat(6, 135px) 1fr;
    }

    > .header {
      display: grid;
      grid-row-gap: 20px;
      align-self: end;

      > svg:nth-child(1) {
        fill: #ACACAC;
      }
    }

    > .content {
      /* grid-row: 3/3; */
      display: grid;
      align-content: end;
      grid-column: 2 / 6;
      grid-row-gap: 35px;
      grid-template-columns: repeat(4, 1fr);
    }

    > * {
      grid-column-start: 2;
    }
  }
`;

export const StyledTitle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-column-gap: 12px;
  
  > div {
    background: ${colors.mainGreen};
    width: 5px;
    height: 100%;
  }

  > p {
    white-space: nowrap;
    color: ${colors.mainGreen};
    font-size: 21px;
    font-weight: 700;
  }
`;

export default Container;