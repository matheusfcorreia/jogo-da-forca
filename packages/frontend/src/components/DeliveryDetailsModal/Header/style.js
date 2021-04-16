import styled from 'styled-components';

import colors from '../../../assets/colors';

export const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  background: ${({ status }) => status === 'delivered' ? colors.mainBlue : colors.lightGreen};
  height: 40px;
  border-top-left-radius: 11px; 
  border-top-right-radius: 11px;
  font-weight: 700;
  font-size: 15px;
  place-items: center; 

  > p {
    color: white;
    grid-column-start: 2;
  }

  > svg {
    width: 16px;
    fill: white;

    &:hover {
      cursor: pointer;
    }
  }
`;