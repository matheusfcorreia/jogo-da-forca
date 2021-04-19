import React from 'react';
import { useDispatch } from 'react-redux';

import Container, { DfeInfos, Dot } from './style';

const LogsCard = ({ log }) => {
  const dispatch = useDispatch();

  return (
    <Container >
      <DfeInfos  >
        <p>Identificação: {log.IDENTIFICATION}</p> 
        <p>Descrição: {log.DESCRIPTION}</p> 
        <div className="date-div" >  
          <Dot />
          <p>Data & Hora: {log.DATE}</p>
        </div>
      </DfeInfos>
    </Container>
  );
};

export default LogsCard;