import styled from 'styled-components';

import colors from '../../../assets/colors';

export const StyledHeaderFilter = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  grid-column-gap: 25px;

  > div:nth-child(2) {
    width: 400px;
    height: 35px;
  
    > div {
      border-radius: 5px;
      
      > input {
        padding-left: 15px;
        font-size: 13px;
        color: ${colors.grayText}
      }

      > div > svg {
        width: 16px;
      }
    }
  }
`;

export const ShowFilters = styled.div`
  width: min-content;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 5px;
  > p {
    color: ${colors.grayText2};
    font-size: 12px;
    font-weight: 500;

    > span {
      font-size: 15px;
      font-weight: 700;
      color: ${colors.mainGreen};
    }
  }

  > svg {
    width: 20px; 
    fill: ${colors.grayText};
  }

  > p {
    color: ${colors.grayText};
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap; 
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ReloadDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center; 
  height: 100%;
  grid-column-gap: 17px;

  > svg {
    fill: ${colors.grayText};
    width: 16px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ReloadBar = styled.div`
  width: 2px;
  height: 100%;
  background: ${colors.lightGray};
`;