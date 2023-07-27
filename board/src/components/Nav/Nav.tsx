import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import SignStatus from './Sign/SignStatus';
import Search from '../Search/Search';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

interface Props {
  darkMode: boolean;
  changeMode: () => void;
}

const Nav = ({ darkMode, changeMode }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const gotoMain = () => {
    navigate('/');
  };

  return (
    <Container>
      <Section>
        <Logo>
          <MainLogo src="images/home-button.png" onClick={gotoMain} />
          {/* <Search /> */}
        </Logo>
        <SignStatus />
      </Section>
      <DarkModeSwitch
        style={{
          position: 'absolute',
          top: 60,
          right: 30,
          padding: 5,
          borderRadius: 20,
          backgroundColor: '#f1f1f1',
          zIndex: 1,
        }}
        checked={darkMode}
        onChange={() => {
          changeMode();
        }}
        moonColor="#111"
        size={36}
      />
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.color1};
  border-bottom: 1px solid ${props => props.theme.color2};
  transition: 0.2s;
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
