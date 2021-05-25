import styled from 'styled-components';

const Container = styled.form`
  display: grid;
  grid-template-rows: 50px 190px 150px 40px;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  width: 1000px;
  height: 600px;
  margin: auto;
  margin-top: 40px;
`;

export const PlayersContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 800px;
  justify-content: space-between;
`;

export const Player = styled.div`
  font-weight: 600;
  border-radius: 5px;
  color: #0072BC;
  background-color: ${(props) => props.chance ? '#00FFAE' : ''};
  padding: 5px;
`;

export const HeaderBar = styled.div`
  display: inline-flex;
  place-items: center;
  justify-content: center;
  grid-column-gap: 30px;
  height: 130px;
  width: 1000px;
  border: 3px solid #0072BC;
  border-radius: 5px;

`;

export const Letter = styled.span`
  display: grid;
  width: 50px;
  height: 80px;
  font-size: 50px;
  font-weight: 700;
  ${({index, matched}) => matched.includes(index) ? 'background-color: transparent; color: #0072BC;' : 'background-color: #CCC; color: #CCC;'};
  justify-content: center;
  align-items: center;
`;

export const Kick = styled.input`
  border: 3px solid #0072BC;
  border-radius: 5px;
  width: 100px;
  height: 150px;
  font-size: 100px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 100px;
  outline: unset;
`;

export const Button = styled.button`
  width: 90px;
  height: 30px;
  margin-top: 130px;
  background-color: #37AD8C;
  border: 3px solid #37AD8C;
  border-radius: 5px;
  color: white;
  font-weight: 800;
  cursor: pointer;
`;


export default Container;