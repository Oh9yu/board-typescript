import React from 'react';
import styled from 'styled-components';
import SignContainer from './SignContainer';

const Signin = () => {
  const signInHandler = () => {
    console.log('sign in');
  };

  return <SignContainer form="Sign In" onClick={signInHandler} />;
};

export default Signin;
