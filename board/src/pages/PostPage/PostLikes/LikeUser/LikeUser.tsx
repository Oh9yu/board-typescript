import React from 'react';
import styled from 'styled-components';
import UserList from './UserList/UserList';

interface Props {
  usersWhoLiked: string[];
}

const LikeUser = ({ usersWhoLiked }: Props) => {
  return (
    <Container>
      {usersWhoLiked?.map((name, idx) => {
        return <UserList name={name} key={idx} />;
      })}
    </Container>
  );
};

export default LikeUser;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  max-height: 300px;
  padding: 10px;
  top: 0;
  right: -100px;
  border: 2px solid #7594dd;
  border-radius: 5px;
  overflow: scroll;
  @media screen and (max-width: 600px) {
    width: 80px;
    right: -80px;
  }
`;
