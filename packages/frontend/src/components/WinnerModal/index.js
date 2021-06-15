import React from 'react';

import { Trophy } from 'assets/icons';
import { ModalContainer, StyledBackground, Description, SvgContainer, ResetingGame } from './style';

const WinnerModal = ({ winner }) => {

  return (
    <StyledBackground>
      <ModalContainer>
        <SvgContainer>
          <Trophy />
        </SvgContainer>
        <Description>
          O vencedor foi {winner.NAME} com {winner.SCORE} pontos
        </Description>
        <ResetingGame>
          Reiniciando jogo...
        </ResetingGame>
      </ModalContainer>
    </StyledBackground>
  );
};

export default WinnerModal;
