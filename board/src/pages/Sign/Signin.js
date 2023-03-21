import React, { useState } from 'react';
import styled from 'styled-components';
import SignContainer from './SignContainer/SignContainer';

const Signin = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    password: '',
  });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const signInHandler = () => {
    console.log('sign in');
  };

  return (
    <SignContainer
      type="Sign In"
      onClick={signInHandler}
      inputValue={inputValue}
      onChangeInput={onChangeInput}
    />
  );
};

export default Signin;
