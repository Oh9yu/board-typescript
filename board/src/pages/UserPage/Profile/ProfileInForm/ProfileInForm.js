import React from 'react';
import styled from 'styled-components';

const ProfileInForm = ({ username, userEmail, description }) => {
  console.log(username);

  return (
    <UserInform>
      <Text fontsize={24}>{username}</Text>
      <Text fontsize={18}>{userEmail}</Text>
      <Desc>{description ? { description } : 'Hello'}</Desc>
    </UserInform>
  );
};

export default ProfileInForm;

const UserInform = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 10px;
`;

const Text = styled.p`
  min-height: 20px;
  margin-top: 5px;
  color: #555;
  font-size: ${props => props.fontsize}px;
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 10px 0px;
  min-height: 30px;
  border: 1px solid #738cd3;
  border-radius: 5px;
`;
