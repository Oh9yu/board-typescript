import React from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage/ProfileImage';

const Profile = () => {
  return (
    <Container>
      <ProfileImage />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
