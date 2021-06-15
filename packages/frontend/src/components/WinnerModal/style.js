import styled from 'styled-components';

export const StyledBackground = styled.div`
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000000a6;
  display: grid;
  top: 0;
  z-index: 2;
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 150px 50px;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: absolute;
  place-self: center center;
  border-radius: 10px;
  width: 420px;
  height: 380px;
`;

export const SvgContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

export const Description = styled.div`
  margin-top: 40px;
  padding-inline: 25px;
  text-align: center;
  color: #00FFAE;
  font-weight: 600;
  font-size: 28px;
`;

export const ResetingGame = styled.div`
  margin-top: 80px;
  padding-inline: 25px;
  text-align: center;
  color: #0072BC;
  font-weight: 600;
  font-size: 20px;
`;
