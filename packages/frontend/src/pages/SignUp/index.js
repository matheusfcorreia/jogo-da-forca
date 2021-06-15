import React, { useEffect } from 'react';

import Container from './style';
import SignupForm from './SignupForm';

const SignUp = () => {
  return (
    <Container
      logo={false}
      title="Login"
      right={<SignupForm />}
    />
  )
};

export default SignUp;
