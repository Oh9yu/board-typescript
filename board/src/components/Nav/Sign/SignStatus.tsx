import React from 'react';
import styled from 'styled-components';
import jwt_decode from 'jwt-decode';
import SignInBtn from './NavBtn/NavSignIn';
import SignUpBtn from './NavBtn/NavSignUp';
import NavSignOutBtn from './NavBtn/NavSignOut';
import NavProfile from './NavBtn/NavProfile';
import NavAdmin from './NavBtn/NavAdmin';
import Alert from './Alert/Alert';
import getToken from '../../../utils/getToken';

const SignStatus = () => {
  const token = getToken('TOKEN');
  const isAdmin: boolean = token ? jwt_decode<any>(token).isAdmin : null;

  return (
    <Container>
      {token && <Alert />}
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
