import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignContainer from './SignContainer/SignContainer';
import { API } from '../../config/config';

const Signin = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<any>({
    email: '',
    password: '',
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const signInHandler = () => {
    fetch(`${API.signin}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...inputValue }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.message === 'Successfully signed in') {
          localStorage.setItem('TOKEN', res.token);
          localStorage.setItem('ISADMIN', res.isAdmin);
          navigate('/');
        } else if (res.message === 'Given email is not found in DB') {
          alert('아이디를 확인하세요');
        } else if (res.message === 'Passed in wrong password') {
          alert('비밀번호를 확인하세요');
        } else if (res.message === 'The given email is blocked') {
          alert('차단된 사용자 입니다');
        }
      });
  };

  return (
    <SignContainer
      type="Sign In"
      signHandler={signInHandler}
      inputValue={inputValue}
      onChangeInput={onChangeInput}
    />
  );
};

export default Signin;
