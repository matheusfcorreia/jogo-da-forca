import React, { useState } from 'react';

import { StyledInputWithPassorwdTips } from './style';

import { LabeledInput } from '..';

import PasswordTips from './PasswordTips';
import { hasUppercaseLetter as checkUppercaseLetter, hasSymbol as checkSymbol } from 'util/regexp';

const InputWithPasswordTips = ({ inputRef, enableButton, setEnableButton }) => {
  const [validation, setValidation] = useState({
    hasUppercaseLetter: false,
    hasSymbol: false,
    minLength: false,
  });

  const validatePassword = event => {
    const value = event.target.value;

    const hasUppercaseLetter = checkUppercaseLetter(value);
    const hasSymbol = checkSymbol(value);
    const minLength = value.length >= 6;

    const valid = hasUppercaseLetter && hasSymbol && minLength;

    if (valid !== enableButton) setEnableButton(valid);

    setValidation({
      hasUppercaseLetter,
      hasSymbol,
      minLength,
    });
  };

  return (
    <StyledInputWithPassorwdTips>
      <LabeledInput
        className="input-div"
        type="password"
        title="Senha"
        placeholder="digite sua senha"
        onChange={validatePassword}
        ref={inputRef}
      />
      <PasswordTips {...validation} />
    </StyledInputWithPassorwdTips>
  );
};

export default InputWithPasswordTips;
