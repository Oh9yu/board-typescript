import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignStatus from './Sign/SignStatus';

const Nav = () => {
  const navigate = useNavigate();
  const gotoMain = () => {
    navigate('/');
  };

  return (
    <Container>
      <MainLogo src="images/home-button.png" onClick={gotoMain} />
      {<SignStatus />}
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #c9d9f9;
  padding: 0px 10px;
`;

const MainLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
