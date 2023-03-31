import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileInForm from './ProfileInForm/ProfileInForm';
import EditProfile from './EditProfile/EditProfile';

const Profile = () => {
  return (
    <Container>
      <ProfileImage />
      <ProfileInForm />
      <EditProfile />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
