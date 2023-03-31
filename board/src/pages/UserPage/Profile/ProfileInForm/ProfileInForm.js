import React from 'react';
import styled from 'styled-components';

const ProfileInForm = () => {
  return (
    <UserInform>
      <Text fontsize={24}>props.name</Text>
      <Text fontsize={18}>props.email</Text>
    </UserInform>
  );
};

export default ProfileInForm;

const UserInform = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Text = styled.p`
  margin-top: 5px;
  color: #555;
  font-size: ${props => props.fontsize}px;
`;
