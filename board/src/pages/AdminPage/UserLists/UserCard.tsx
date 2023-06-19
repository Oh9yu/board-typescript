import React from 'react';
import { styled } from 'styled-components';

const UserCard = ({ userData }: any) => {
  console.log(userData._id);

  return <Container></Container>;
};

export default UserCard;

const Container = styled.div`
  width: 100%;
  background-color: #ddd;
`;
