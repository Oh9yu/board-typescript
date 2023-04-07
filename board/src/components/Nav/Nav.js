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
        <Logo>
          <MainLogo src="images/home-button.png" onClick={gotoMain} />
          <Search />
        </Logo>
        <SignStatus />
      </Section>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c9d9f9;
  padding: 0px 100px;
  border-bottom: 1px solid #7594dd;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  height: 80px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
