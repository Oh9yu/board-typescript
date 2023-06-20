import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import getToken from '../../../utils/getToken';
import UserCard from './UserCard';

interface Props {
  setPage: (arg: string) => void;
}

type UserData = User[];

interface User {
  profileImage?: string;
  descriptions?: string;
  _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isBlocked: boolean;
  updatedAt: string;
  createdAt?: string;
  __v?: number;
}

const UserListSection = ({ setPage }: Props) => {
  const [userData, setUserData] = useState<UserData>([]);
  const token = getToken('TOKEN') || '';

  useEffect(() => {
    fetch(`${API.admin}/userAccounts`, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);

  return (
    <Container>
      {userData?.splice(1).map((data: User) => {
        return <UserCard key={data._id} userData={data} setPage={setPage} />;
      })}
    </Container>
  );
};

export default UserListSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  min-height: 600px;
  margin: auto;
  padding: 20px;
  border: 2px solid #738cd3;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
