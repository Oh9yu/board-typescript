import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile/Profile';
import { API } from '../../config/config';
import getToken from '../../utils/getToken';
import PostList from '../../components/PostList/PostList';

const UserPage = () => {
  const [data, setData] = useState<any>([]);
  const token = getToken('TOKEN') || '';

  useEffect(() => {
    fetch(`${API.userpage}/mypage`, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

  return (
    <Container>
      <Section width={240}>
        <Profile userdata={data} />
      </Section>
      <Section width={520}></Section>
    </Container>
  );
};

//id, postId, title, name, views, likes, createdAt

export default UserPage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 50px auto;
  background-color: #f9fafc;
  border-radius: 8px;
  box-shadow: 0 0 5px #f1f4f7;
`;
const Section = styled.section<{ width: number }>`
  margin: 10px;
  padding: 30px 10px;
  width: ${props => props.width}px;
  height: max-content;
  background-color: #fff;
  border: 2px solid #7594dd;
  border-radius: 6px;
  box-shadow: 0 0 2px #7594dd;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
