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
  const identification = useRef();

  const registerLog = async () => {
    await RequestPostLogs({ description: description.current.value, identification: identification.current.value })
  }

  const onSubmitSignUpForm = async event => {
    event.preventDefault();

    if (description.current.value.length === 0 || identification.current.value.length === 0) {
      if (description.current.value.length === 0) setDescriptionError(true);
      if (identification.current.value.length === 0) setIdentificationError(true);
    } else {
      await registerLog();
      history.push('/logs/lista');
    }
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
        ref={identification}
        title="Identificação"
        placeholder="digite a identificação"
        onFocus={() => removeError('IDENTIFICATION')}
        error={!!identificationError}
        errorMsg={'Insira uma identificação do log'}
      />
      <LabeledInput 
        ref={description}
        title="Descrição"
        placeholder="digite uma descrição para o acesso"
        onFocus={() => removeError('DESCRIPTION')}
        error={!!descriptionError}
        errorMsg={'Insira uma descrição'}
      />
      <div className="buttons">
        <Button children="GERAR" type="submit" />
      </div>
    </Form>
  );
};

export default SignupForm;
