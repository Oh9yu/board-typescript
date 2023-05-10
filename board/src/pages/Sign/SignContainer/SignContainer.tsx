import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SignInForm from '../Form/SignInForm/SignInForm';
import SignUpForm from '../Form/SignUpForm/SignUpForm.jtsx';

const SignContainer = ({ type, onClick, inputValue, onChangeInput }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Container>
      <SignSection>
        <Title>{type}</Title>
        {pathname === '/signin' ? (
          <SignInForm inputValue={inputValue} onChangeInput={onChangeInput} />
        ) : pathname === '/signup' ? (
          <SignUpForm inputValue={inputValue} onChangeInput={onChangeInput} />
        ) : null}
        <Button onClick={onClick}>{type}</Button>
      </SignSection>
    </Container>
  );
};

export default SignContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #f9fbff;
`;

const SignSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  width: 400px;
  border: 2px solid #7594dd;
  border-radius: 8px;
  box-shadow: 0 0 5px #7594dd;
`;

const Title = styled.section`
  font-size: 24px;
  margin: 10px 0;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  margin: 10px 0;
  border: 2px solid #7594dd;
  border-radius: 5px;
  background-color: transparent;
  &:hover {
    border: 2px solid #7594dd;
    background-color: #7594dd;
    transition: 0.2s;
  }
`;
