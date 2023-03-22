import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignContainer from './SignContainer/SignContainer';

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const signUpHandler = () => {
    fetch('http://10.58.52.190:8000/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...inputValue }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
      })
      .then(data => {
        if (data.message === 'User has been created!') {
          alert('가입을 축하합니다');
          navigate('/');
        } else {
          alert('이미 가입한 회원입니다');
        }
      });
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
