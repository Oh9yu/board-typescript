import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile/Profile';
import { API } from '../../config/config';

const UserPage = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem('TOKEN');

  useEffect(() => {
    fetch(`${API.mypage}`, {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <Container>
      <Section width={240}>
        <Profile />
      </Section>
      <Section width={520}></Section>
    </Container>
  );
};

export default UserPage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  margin: 50px auto;
  background-color: #f9fafc;
  border-radius: 8px;
  box-shadow: 0 0 5px #f1f4f7;
`;
const Section = styled.section`
  margin: 10px;
  padding: 30px 10px;
  width: ${props => props.width}px;
  background-color: #fff;
  border: 2px solid #7594dd;
  border-radius: 6px;
  box-shadow: 0 0 2px #7594dd;
`;
