import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBtn from './NavBtn';

const SignUpBtn = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/sign');
  };

  return (
    <NavBtn
      btnName="Sign Up"
      width={80}
      height={40}
      fontSize={16}
      borderColor="#7594dd"
      hoverColor="#5173c2"
      onClick={clickHandler}
    />
  );
};

export default SignUpBtn;
