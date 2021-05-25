import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '../style';
import { LabeledInput, Button } from 'components/index';
import { RequestPostLogs } from '../../../services/api';

const SignupForm = () => {
  const history = useHistory();

  const [identificationError, setIdentificationError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)

  const player1 = useRef();
  const player2 = useRef();
  const player3 = useRef();

  const onSubmitSignUpForm = async event => {
    event.preventDefault();

    // localStorage.setItem('userName', userName.current.value)
    history.push(`/play/${player1.current.value}/${player2.current.value}/${player3.current.value}`);
    // }
  };

  const removeError = errorType => {
    switch (errorType) {
      case 'IDENTIFICATION':
        setIdentificationError(false);
        break;
      case 'DESCRIPTION':
        setDescriptionError(false);
        break;
    }
    
    
  }
  return (
    <Form onSubmit={onSubmitSignUpForm}>
      <LabeledInput
        ref={player1}
        title="Jogador 1"
        placeholder="digite seu nome"
        onFocus={() => removeError('IDENTIFICATION')}
        error={!!identificationError}
        errorMsg={'Insira uma identificação do log'}
      />
      <LabeledInput
        ref={player2}
        title="Jogador 2"
        placeholder="digite seu nome"
        onFocus={() => removeError('IDENTIFICATION')}
        error={!!identificationError}
        errorMsg={'Insira uma identificação do log'}
      />
      <LabeledInput
        ref={player3}
        title="Jogador 3"
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
