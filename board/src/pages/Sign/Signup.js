import React, { useState } from 'react';
import styled from 'styled-components';
import SignContainer from './SignContainer/SignContainer';

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    id: '',
    password: '',
  });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const signUpHandler = () => {
    console.log('sign up');
  };

  return (
    <SignContainer
      type="Sign Up"
      onClick={signUpHandler}
      inputValue={inputValue}
      onChangeInput={onChangeInput}
    />
  );
};

export default Signup;
