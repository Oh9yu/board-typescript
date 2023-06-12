import React from 'react';
import styled from 'styled-components';

const ProfileInForm = ({ username, userEmail, descriptions }: any) => {
  console.log(username);

  return (
    <UserInform>
      <Text fontSize={24}>{username}</Text>
      <Text fontSize={18}>{userEmail}</Text>
      <Desc>{descriptions ? descriptions : 'Hello'}</Desc>
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

const Text = styled.p<{ fontSize: number }>`
  min-height: 20px;
  margin-top: 5px;
  color: #555;
  font-size: ${props => props.fontSize}px;
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 10px 0px;
  min-height: 30px;
  border: 1px solid #738cd3;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    min-width: 240px;
  }
`;
