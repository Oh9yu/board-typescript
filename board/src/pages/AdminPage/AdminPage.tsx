import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../config/config';
import Aside from './Aside/Aside';
import UserList from './UserList/UserList';
import Category from './Category/Category';

const AdminPage = () => {
  const [page, setPage] = useState('');
  const token = localStorage.getItem('TOKEN');

  const asideClick = e => {
    setPage(e);
  };

  //user fetch
  // useEffect(() => {
  //   fetch(`${API.admin}/admin/userAccounts`, {
  //     headers: { Authorization: `${token}` },
  //   });
  // }, []);
  return (
    <Container>
      <Aside page={page} setPage={asideClick} />
      {page === 'UserList' ? <UserList /> : null}
      {page === 'Category' ? <Category /> : null}
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
`;
