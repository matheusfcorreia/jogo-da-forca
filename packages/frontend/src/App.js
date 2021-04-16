import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { LoadingBackdrop } from '@softcenter/react-basic-components';

import Routes from './routes/Main.routes';

const App = () => {
  return <Body />;
};

const Body = () => {
  const loading = useSelector(s => s.userInterface.loading);

  return (
    <StyledBody>
      <Routes />
      {loading && <LoadingBackdrop />}
    </StyledBody>
  );
};

const StyledBody = styled.div`
  display: grid;
  min-height: 100%;
  width: 100%;
  position: relative;
`;

export default App;
