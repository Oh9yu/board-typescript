import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignStatus from './Sign/SignStatus';
import Search from '../Search/Search';

const Nav = () => {
  const navigate = useNavigate();
  const gotoMain = () => {
    navigate('/');
  };

  return (
    <Container>
      <Section>
        <MainLogo src="images/home-button.png" onClick={gotoMain} />
        <Search />
      </Section>
      <SignStatus />
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 1024px;
  height: 80px;
  background-color: #c9d9f9;
  padding: 0px 100px;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
