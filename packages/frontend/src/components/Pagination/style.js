import styled from 'styled-components';

import colors from '../../assets/colors';

export const Container = styled.div`
  display: grid;
  grid-column: 2 / 14;
  margin-top: 50px;
  grid-row-gap: 25px;

  > button {
    justify-self: center;
    grid-column-gap: 5px;
    padding: 0;
    width: 112px;
    height: 33px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 500px;
    color: ${colors.grayText};

    > svg {
      fill: ${colors.grayText};
    }
  }
`;

export const SelectDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-column-gap: 6px;
  align-items: center;
  color: ${colors.grayText};
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
`;

export const Select = styled.select`
  background: #fff;
  border: 0;
  box-shadow: 0 0 4px 0 #b9b9b9;
  outline: 0;
  padding: 8px 4px;
  transition: box-shadow 0.15s ease-in-out;
  border-radius: 5px;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  color: ${colors.grayText};
  
  &:active,
  &:focus {
    box-shadow: 2px 2px 8px 2px #d2d2d2;
  }
  &:hover {
    cursor: pointer;
  }
`;