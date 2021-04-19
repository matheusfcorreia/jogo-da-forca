import styled from 'styled-components';

import { GridPage } from '../../components'

import colors from '../../assets/colors';

const Container = styled(GridPage)`
  padding: 80px 0 40px;
  grid-auto-rows: min-content;
`;

export const HeaderBar = styled.div`
  margin-top: 40px;
  display: grid;
  place-items: center;
  grid-column: 3 / 13;
  height: 32px;
  background: ${({ status }) => status === 'shipped' ? colors.lightGreen : colors.mainBlue};
  color: white;
  font-size: 13px;
  font-weight: 700;
  border-radius: 5px;

  @media screen and (min-width: 1366px) {
    grid-column: 3 / 13;
  }
`;

export const StyledDeliveryList = styled.div`
  min-height: 250px;
  margin-top: 30px;
  grid-column: 3 / 13;
  display: grid;
  grid-auto-rows: min-content;
  justify-content: space-between;
  grid-row-gap: 15px;
  scroll-behavior: auto;

  @media screen and (min-width: 1366px) {
    grid-column: 3 / 13;
  }

  @media screen and (min-width: 1600px) {
    min-height: 300px;
  }

  /* &.empty {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    place-items: center;

    > div {
      display: grid;
      color: ${colors.grayText};
      font-size: 19px;
      font-weight: 500;

      > svg {
        justify-self: center;
        width: 120px;
        fill: ${colors.grayText};
      }
    }
  } */
`;

export default Container;