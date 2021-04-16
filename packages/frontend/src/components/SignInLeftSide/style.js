import styled from 'styled-components';

const Container = styled.div`
  color: #ffffff;
  display: grid;
  grid-column: 3 / 7;
  grid-row-gap: 25px;    
  align-content: space-between;

  > .header {
    display: grid;
    grid-row-gap: 20px;
    margin-bottom: 20px;

    > svg:nth-child(1) {
      fill: white;
    }

    > svg:nth-child(2) {
      /* width: 500px; */
    }
  }

  > h1 {
    font-size: 40px;

    @media screen and (min-width: 1366px) {
      font-size: 45px;
    }
  }

  > p {
    font-weight: 600;
    font-size: 22px;
  }

  > svg {
    margin-top: 20px;
  }
`;

export default Container;