import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Container from './style';
import SignupForm from './SignupForm';

const SignUp = () => {
  const history = useHistory();

  useEffect(() => {
    
  }, []);

  return (
    <Container
      logo={false}
      title="Login"
      right={<SignupForm />}
    />
  )
};

export default SignUp;
