import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBtn from './NavBtn/NavBtn';

const NavProfile = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/userpage');
  };

  return (
    <NavBtn
      btnName="userpage"
      width={80}
      height={40}
      fontSize={16}
      onClick={clickHandler}
    />
  );
};

export default NavProfile;
