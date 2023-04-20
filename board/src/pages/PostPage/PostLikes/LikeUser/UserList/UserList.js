import React from 'react';
import styled from 'styled-components';

const UserList = ({ name }) => {
  return <User>{name}</User>;
};

export default UserList;

const User = styled.p`
  font-size: 12px;
  margin-right: 5px;
`;
