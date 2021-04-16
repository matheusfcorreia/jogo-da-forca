import styled from 'styled-components';

import colors from '../../assets/colors';

export const Container = styled.div`
  min-height: 100vh;
`;

export const StyledTopBar = styled.div`
  display: grid;
  background: ${colors.mainGreen};
  height: 63px;
  grid-template-columns: 1fr repeat(12, 80px) 1fr;
  align-items: center;

  @media screen and (min-width: 1366px) {
    grid-template-columns: 1fr repeat(12, 95px) 1fr;
  }

  @media screen and (min-width: 1920px) {
    grid-template-columns: 1fr repeat(12, 95px) 1fr;
  }

  > svg {
    grid-column-start: 2;
    width: 215px;
    height: 30px;

    @media screen and (min-width: 1366px) {
      width: 250px;
      height: 35px;
    }
  }
`;

export const Options = styled.div`

  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  grid-column: 6 / 10;

  > p {
    white-space: nowrap;
    color: white;
    font-size: 20px;
    font-weight: 800; 
    padding: 4px 0;

    @media screen and (min-width: 1600px) {
      font-size: 15px;
    }

    &.active {
      border-bottom: 3px solid white;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const GreenStrip = styled.div`
  height: 3px;
  background: ${colors.secondaryGreen};
`;

export const WhiteBar = styled.div`
  background: white;
  width: 1px;
  height: 37px;
  grid-column-start: 5;
`;

export const SmallWhiteBar = styled.div`
  background: white;
  width: 1px;
  height: 22px;
`;

export const StyledUserOptions = styled.div`
  display: grid;
  grid-column: 11 / 14;
  grid-auto-flow: column;
  white-space: nowrap;
  grid-auto-columns: min-content; 
  justify-content: end;
  grid-column-gap: 22px;

  font-size: 12px;
  font-weight: 600;
  align-items: center;
  color: white;

  @media screen and (min-width: 1600px) {
    font-size: 13px;
  }
`;

export const LogOut = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content; 
  grid-column-gap: 4px;
  align-items: center;

  > svg {
    width: 17px;
    height: 27px;
  }

  &:hover {
    cursor: pointer;
  }
`;

