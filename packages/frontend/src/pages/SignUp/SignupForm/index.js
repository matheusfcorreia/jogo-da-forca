import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { useHistory } from 'react-router-dom';

import { Form } from '../style';
import { LabeledInput, Button } from 'components/index';

const SignupForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [identificationError, setIdentificationError] = useState(false);
  const [socket, setSocket] = useState(false);

  const player = useRef();

  const onSubmitSignUpForm = async event => {
    event.preventDefault();

    localStorage.setItem('userName', player.current.value);

    history.push(`/play`);
  };

  const removeError = errorType => {
    switch (errorType) {
      case 'IDENTIFICATION':
        setIdentificationError(false);
        break;
    }
  }

  return (
    <Form onSubmit={onSubmitSignUpForm}>
      <LabeledInput
        ref={player}
        title="Jogador 1"
        placeholder="digite seu nome"
        onFocus={() => removeError('IDENTIFICATION')}
        error={!!identificationError}
        errorMsg={'Insira uma identificação do log'}
      />
      <div className="buttons">
        <Button children="JOGAR" type="submit" />
      </div>
    </Form>
  );
};

export default SignupForm;
