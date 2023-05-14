import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBtn from './NavBtn/NavBtn';

const SignInBtn = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/signin');
  };
  return (
    <NavBtn
      btnName="Sign In"
      width={80}
      height={40}
      fontSize={16}
      onClick={clickHandler}
    />
  );
};

export default SignInBtn;
