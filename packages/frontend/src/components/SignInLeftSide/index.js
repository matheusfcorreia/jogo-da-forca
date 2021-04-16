import React from 'react';

import Container from './style';

import { ComputerIlustration } from '../../assets/images';
import { GraySoftCenter, ComprovaTaker } from '../../assets/logos';

const SignInLeftSide = ({header}) => {
  return (
    <Container>
      {
        header &&
        <div className="header" >
          <GraySoftCenter />
          <ComprovaTaker />
        </div>
      }
      <h1>Olá! Seja <br/> Bem vindo!</h1>
      <p>Acompanhe suas <br/> entregas e acesse seus <br/> comprovantes!</p>
      <ComputerIlustration />
    </Container>
  );
};

export default SignInLeftSide;