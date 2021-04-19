import styled from 'styled-components';

import colors from '../../assets/colors';

const Container = styled.div`
  box-shadow: 0 0 6px 1px #0000001f;
  border-radius: 5px;
  padding: 15px;
  display: grid;
  grid-template-rows: min-content 1fr 16px;
  grid-row-gap: 11px;
  color: ${colors.grayText};
  margin-right: 25px;

  grid-column: 2 / 10;
  justify-content: space-between;
`;

export const DfeInfos = styled.div`
  display: grid;
  grid-row-gap: 11px;
  font-size: 13px;
  font-weight: 600;
  color: ${({status}) => status === 'shipped' ? colors.lightGreen : colors.mainBlue};

  > .date-div {
    font-size: 11px;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-column-gap: 3px;
    align-items: center;
  }
`;

export const Dot = styled.div`
  border-radius: 100%;
  background: ${({status}) => status === 'shipped' ? colors.lightGreen : colors.mainBlue};
  width: 6px;
  height: 6px;
`;

export default Container;