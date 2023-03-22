import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignContainer from './SignContainer/SignContainer';
import { API } from '../../config/config';

const Signin = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  console.log(API);
  console.log(inputValue);

  console.log('token :', localStorage.getItem('TOKEN'));

  const signInHandler = () => {
    fetch('http://10.58.52.190:8000/signIn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...inputValue }),
    }).then(data => {
      if (data.ok === true) {
        console.log(data.token);
        localStorage.setItem('TOKEN', data.token);
        navigate('/');
      } else if (data.message === 'Given email is not found in DB') {
        alert('아이디를 확인하세요');
      } else if (data.message === 'Passed in wrong password') {
        alert('비밀번호를 확인하세요');
      } else if (data.message === 'The given email is blocked') {
        alert('차단된 사용자 입니다');
      }
    });
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
