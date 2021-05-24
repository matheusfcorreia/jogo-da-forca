import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Container from './style';

import { SignInLeftSide } from 'components/index';
import { useDispatch, useSelector } from 'react-redux';
import SignupForm from './SignupForm';

const SignUp = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  // const query = new URLSearchParams(history.location.search);

  // useEffect(() => {
  //   if (!token) return history.push('/entrar');
  // }, [dispatch, history, token]);

  return (
    <Container
      logo={false}
      title="Login"
      right={<SignupForm />}
    />
  )
};

export default SignUp;
