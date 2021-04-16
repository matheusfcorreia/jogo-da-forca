import styled from 'styled-components';

const GridPage = styled.div`
  display: grid;
  height: 100%;

  grid-template-columns: 1fr repeat(12, 80px) 1fr;

  @media screen and (min-width: 1366px) {
    grid-template-columns: 1fr repeat(12, 95px) 1fr;
  }

  @media screen and (min-width: 1920px) {
    grid-template-columns: 1fr repeat(12, 95px) 1fr;
  }
`;

export default GridPage;