import React, { useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../config/config';

const AdminPage = () => {
  const token = localStorage.getItem('TOKEN');

  //user fetch
  useEffect(() => {
    fetch(`${API.admin}/admin/userAccounts`, {
      headers: { Authorization: `${token}` },
    });
  }, []);
  return <Container></Container>;
};

export default AdminPage;

const Container = styled.div``;
