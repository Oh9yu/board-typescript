import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBtn from './NavBtn/NavBtn';

const NavAdmin = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/adminpage');
  };

  return (
    <NavBtn
      btnName="admin"
      width={80}
      height={40}
      fontSize={16}
      onClick={clickHandler}
    />
  );
};

export default NavAdmin;
