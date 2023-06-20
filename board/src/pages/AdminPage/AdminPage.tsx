import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../config/config';
import Aside from './Aside/Aside';
import UserList from './UserLists/UserListSection';
import Category from './Category/Category';

const AdminPage = () => {
  const [page, setPage] = useState('');

  const asideClick = (pageName: string) => {
    setPage(pageName);
  };

  return (
    <Container>
      <Aside page={page} asideClick={asideClick} />
      {page === 'UserList' ? <UserList setPage={asideClick} /> : null}
      {page === 'Category' ? <Category setPage={asideClick} /> : null}
    </Container>
  );
};

export default AdminPage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  margin-top: 20px;
  width: 1024px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
