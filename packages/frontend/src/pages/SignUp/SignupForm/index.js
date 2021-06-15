import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '../style';
import { LabeledInput, Button } from 'components/index';

const SignupForm = () => {
  const history = useHistory();
  const [identificationError, setIdentificationError] = useState(false);

  const player = useRef();

  const onSubmitSignUpForm = async event => {
    event.preventDefault();

    if (player.current.value < 1) setIdentificationError(true);
    else {
      localStorage.setItem('userName', player.current.value);
  
      history.push(`/play`);
    }
  };

  return (
    <Form onSubmit={onSubmitSignUpForm}>
      <LabeledInput
        ref={player}
        title="Nome do Jogador"
        placeholder="digite seu nome"
        onFocus={() => setIdentificationError(false)}
        error={!!identificationError}
        errorMsg={'Nome do jogador não inserido'}
      />
      <div className="buttons">
        <Button children="JOGAR" type="submit" />
      </div>
    </Form>
  );
};

export default SignupForm;
