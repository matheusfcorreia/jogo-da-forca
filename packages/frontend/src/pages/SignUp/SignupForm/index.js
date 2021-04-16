import React, { useEffect, useRef, useState } from 'react';
import Inputmask from 'inputmask';
import { useHistory } from 'react-router-dom';
import { Form } from '../style';
import { LabeledInput, Button, SecondaryButton, InputWithPasswordTips } from 'components/index';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorCreators } from 'store/ducks/errors';

const SignupForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [identificationError, setIdentificationError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)

  const description = useRef();
  const identification = useRef();

  const onSubmitSignUpForm = event => {
    event.preventDefault();

    if (description.current.value.length === 0 || identification.current.value.length === 0) {
      if (description.current.value.length === 0) setDescriptionError(true);
      if (identification.current.value.length === 0) setIdentificationError(true);
    } else history.push('/logs/lista');
  };

  const removeError = errorName => () => dispatch(ErrorCreators.removeError(errorName));
  return (
    <Form onSubmit={onSubmitSignUpForm}>
      <LabeledInput
        ref={identification}
        title="Identificação"
        placeholder="digite a identificação"
        onFocus={removeError('COMPANY_NAME')}
        error={!!identificationError}
        errorMsg={'Insira uma identificação do log'}
      />
      <LabeledInput 
        ref={description}
        title="Descrição"
        placeholder="digite uma descrição para o acesso"
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
