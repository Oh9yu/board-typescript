import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import SignInBtn from './NavBtn/NavSignIn';
import SignUpBtn from './NavBtn/NavSignUp';

const SignStatus = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const status = pathname === '/' || pathname === '/signup' ? true : false;

  return (
    <Container>
      {status && <SignInBtn />}
      <SignUpBtn />
    </Container>
  );
};

export default SignStatus;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
