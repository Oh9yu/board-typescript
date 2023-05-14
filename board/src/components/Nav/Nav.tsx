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
  justify-content: center;
  width: 100%;
  justify-content: center;
  background-color: #c9d9f9;
  border-bottom: 1px solid #7594dd;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  height: 50px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainLogo = styled.img`
  margin-left: 5px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;
