import React from 'react';
import { useDispatch } from 'react-redux';

import Container, { DfeInfos, Dot } from './style';

const LogsCard = ({ delivery, status }) => {
  const dispatch = useDispatch();

  return (
    <Container >
      <DfeInfos  >
        <p>Identificação: </p> 
        <p>Descrição: </p> 
        <div className="date-div" >  
          <Dot />
          <p>Data & Hora: </p>
        </div>
      </DfeInfos>
    </Container>
  );
};

export default LogsCard;