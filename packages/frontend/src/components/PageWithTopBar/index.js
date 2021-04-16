import React from 'react';
import { useHistory } from 'react-router-dom';

import { ComprovaTaker } from '../../assets/logos';
import { Exit } from '../../assets/icons';
import {
  Container,
  StyledTopBar,
  GreenStrip,
  WhiteBar,
  SmallWhiteBar,
  Options,
  StyledUserOptions,
  LogOut,
} from './style';

const PageWithTopBar = ({ children }) => {
  return (
    <Container>
      <TopBar />
      {children}
    </Container>
  );
};

const TopBar = () => {
  const history = useHistory();

  const firstOptionClass = window.location.href.includes('entregas-abertas') ? 'active' : '';
  return (
    <>
      <StyledTopBar>
        <Options>
          <p className={firstOptionClass} onClick={() => history.push('/logs/lista')}>
            Logs
          </p>
        </Options>
        <UserOptions />
      </StyledTopBar>
      <GreenStrip />
    </>
  );
};

const UserOptions = () => {
  const history = useHistory();

  return (
    <StyledUserOptions>
      <p>Olá, {localStorage.getItem('userName')}</p>
      <SmallWhiteBar />
      <LogOut onClick={() => history.push('/logs/novo')}>
        <Exit />
        <p>Sair</p>
      </LogOut>
    </StyledUserOptions>
  );
};

export default PageWithTopBar;
