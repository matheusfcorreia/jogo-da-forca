import styled from 'styled-components';

import { TwoSidesPage } from '../../components';

const Container = styled(TwoSidesPage)`
  > .right > .content {
    align-content: center;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-row-gap: 17px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: min-content;
  grid-column: 1 / 5;

  > * {
    grid-column: 1 / 5;
  }

  > .buttons {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    width: 283px;
    margin-top: 10px;

    > button {
      align-content: center;
      width: 120px;
      height: 32px;
      padding: 0;
      font-size: 12px;
      border-radius: 5px;
    }
  }
`;

export default Container;
