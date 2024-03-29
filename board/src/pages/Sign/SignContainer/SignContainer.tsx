import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import SignInForm from '../Form/SignInForm/SignInForm';
import SignUpForm from '../Form/SignUpForm/SignUpForm';

type SignContainerProps = {
  type: string;
  signHandler: () => void;
  inputValue: any;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SignContainer = ({
  type,
  signHandler,
  inputValue,
  onChangeInput,
}: SignContainerProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const theme = useTheme();

  return (
    <Container>
      <SignSection theme={theme}>
        <Title>{type}</Title>
        {pathname === '/signin' ? (
          <SignInForm
            inputValue={inputValue}
            onChangeInput={onChangeInput}
            signHandler={signHandler}
          />
        ) : pathname === '/signup' ? (
          <SignUpForm
            inputValue={inputValue}
            onChangeInput={onChangeInput}
            signHandler={signHandler}
          />
        ) : null}
        <Button onClick={signHandler}>{type}</Button>
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

const SignSection = styled.div<{ theme: any }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  width: 400px;
  border: 2px solid ${props => props.theme.color4};
  border-radius: 8px;
  box-shadow: 0 0 5px ${props => props.theme.color4};
`;

const Title = styled.section`
  font-size: 24px;
  margin: 10px 0;
`;

const Button = styled.button<{ theme: any }>`
  width: 200px;
  height: 30px;
  margin: 10px 0;
  border: 2px solid ${props => props.theme.color4};
  border-radius: 5px;
  background-color: transparent;
  &:hover {
    border: 2px solid ${props => props.theme.color4};
    background-color: ${props => props.theme.color4};
    transition: 0.2s;
  }
`;
