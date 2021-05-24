import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '../style';
import { LabeledInput, Button } from 'components/index';
import { RequestPostLogs } from '../../../services/api';

const SignupForm = () => {
  const history = useHistory();

  const [identificationError, setIdentificationError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)

  const description = useRef();
  const userName = useRef();

  const registerLog = async () => {
    await RequestPostLogs({ description: description.current.value, identification: userName.current.value })
  }

  const onSubmitSignUpForm = async event => {
    event.preventDefault();

    localStorage.setItem('userName', userName.current.value)
    // if (description.current.value.length === 0 || identification.current.value.length === 0) {
    //   if (description.current.value.length === 0) setDescriptionError(true);
    //   if (identification.current.value.length === 0) setIdentificationError(true);
    // } else {
    //   await registerLog();
    history.push('/play');
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
        ref={userName}
        title="Nome"
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
