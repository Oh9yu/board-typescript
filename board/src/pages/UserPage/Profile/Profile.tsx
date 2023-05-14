import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileInForm from './ProfileInForm/ProfileInForm';
import EditProfile from './EditProfile/EditProfile';

const Profile = ({ userdata }: any) => {
  console.log('userdata: ', userdata);

  return (
    <Container>
      {/* <ProfileImage img={userdata.profileImage} /> */}
      <ProfileInForm
        username={userdata.name}
        userEmail={userdata.email}
        description={userdata.description}
      />
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
  height: max-content;
`;
