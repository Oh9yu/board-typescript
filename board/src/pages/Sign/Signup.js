import React from 'react';
import styled from 'styled-components';
import SignContainer from './SignContainer';

const Signup = () => {
  const signUpHandler = () => {
    console.log('sign up');
  };

  return <SignContainer form="Sign Up" onClick={signUpHandler} />;
};

export default Signup;
