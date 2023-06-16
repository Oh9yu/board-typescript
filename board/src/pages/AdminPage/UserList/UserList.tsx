import React from 'react';
import styled from 'styled-components';

const UserList = () => {
  return <Container></Container>;
};

export default UserList;

const Container = styled.div`
  width: 800px;
  height: 300px;
  margin: auto;
  border: 2px solid #738cd3;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
