import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBtn from './NavBtn/NavBtn';

const SignUpBtn = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/signup');
  };

  return (
    <NavBtn
      btnName="Sign Up"
      width={80}
      height={40}
      fontSize={16}
      onClick={clickHandler}
    />
  );
};

export default SignUpBtn;
