import styled from 'styled-components';

import colors from '../../../assets/colors';

export const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: repeat(2, min-content);
  background: #f8f8f8;
  justify-content: center;
  grid-auto-flow: column;
  grid-row-gap: 25px;
  padding: 40px 0;

  > div {
    grid-row-start: 1;
  }

  > button {
    grid-column-start: 2;
    grid-row-start: 2;
    justify-self: center;
    font-size: 13px;
    background: ${colors.mainGreen};
    border-color: ${colors.mainGreen};
    width: min-content;
    height: min-content;
    padding: 9px 12px;
    border-radius: 30px; 
  }
`;

export const StyledDefaultFilter = styled.div`
  width: 390px;
  display: grid;
  grid-template-rows: min-content min-content 1fr;
  grid-row-gap: 8px;
  
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

  > div:nth-child(2) {
    height: 30px;
  
    > div {
      border-radius: 5px;
      
      > input {
        padding: 0 12px;
        font-size: 12px;
        color: ${colors.grayText}
      }

      > div > svg {
        width: 14px;
        fill: ${colors.mainGreen};
      }
    }
  }
`;

export const Separator = styled.div`
  width: 2px;
  height: 100%;
  background: ${colors.lightGray};
  justify-self: center;
`;

export const StyledSearchDiv = styled.div`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: min-content 1fr min-content 1fr min-content;
  align-items: center;
  justify-content: space-between;

  > p {
    font-size: 11px;
    font-weight: 500;
    color: ${colors.grayText2};
    white-space: nowrap;
  }

  > div {
    height: 30px;
  
    > div {
      border-radius: 5px;
      
      > input {
        padding: 0 12px;
        font-size: 12px;
        color: ${colors.grayText}
      }
    }
  }

  > svg {
    width: 14px;
    fill: ${colors.mainGreen};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledBubbleList = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  grid-auto-flow: column;
  justify-content : stretch;
`;

export const StyledBubble = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 7px;
  grid-auto-flow: column;
  height: min-content;
  margin: 0 8px 7px 0;
  white-space: nowrap;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  width: min-content;
  background: gray;
  color: white;
  border-radius: 30px;

  > svg {
    width: 8px;
    fill: white;
    
    &:hover {
      cursor: pointer;
    }
  }
`;