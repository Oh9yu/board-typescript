import React from 'react';
import styled from 'styled-components';
import jwt_decode from 'jwt-decode';
import SignInBtn from './NavBtn/NavSignIn';
import SignUpBtn from './NavBtn/NavSignUp';
import NavSignOutBtn from './NavBtn/NavSignOut';
import NavProfile from './NavBtn/NavProfile';
import NavAdmin from './NavBtn/NavAdmin';

const SignStatus = () => {
  const token = localStorage.getItem('TOKEN');
  const isAdmin = token ? jwt_decode(token).isAdmin : null;

  return (
    <Container>
      {!token ? <SignInBtn /> : isAdmin ? <NavAdmin /> : <NavProfile />}
      {token ? <NavSignOutBtn /> : <SignUpBtn />}
    </Container>
  );
};

export default SignStatus;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
