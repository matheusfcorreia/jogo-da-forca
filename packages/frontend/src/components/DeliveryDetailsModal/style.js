import styled from 'styled-components';

export const BlurBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
`;

export const Modal = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  min-height: 450px;
  width: 950px;
  border-radius: 11px;
  background: white;
`;