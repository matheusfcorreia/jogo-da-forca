import React from 'react';

import StyledPasswordTips from './style';
import { Check, Uncheck } from '../../../assets/images';

const PasswordTips = ({ className, hasUppercaseLetter,
  hasSymbol,
  minLength }) => {
  return (
    <StyledPasswordTips className={className}>
      <span>*Necessário para sua senha:</span>
      <span className={`tip ${minLength ? 'checked' : ''}`}>
        {minLength ? <Check /> : <Uncheck />}
        <span>Mínimo de 6 caractéres</span>
      </span>
      <span className={`tip ${hasUppercaseLetter ? 'checked' : ''}`}>
        {hasUppercaseLetter ? <Check /> : <Uncheck />}
        <span>Uma letra maíuscula</span>
      </span>
      <span className={`tip ${hasSymbol ? 'checked' : ''}`}>
        {hasSymbol ? <Check /> : <Uncheck />}
        <span>Conter um símbolo (!@$%&*)</span>
      </span>
    </StyledPasswordTips>
  );
};

export default PasswordTips;
