import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile/Profile';
import { API } from '../../config/config';
import getToken from '../../utils/getToken';
import PostList from '../../components/PostList/PostList';
import PostHeader from '../PostListPage/PostSection/PostHeader/PostHeader';
import { useLocation } from 'react-router-dom';
import Pagenation from '../../components/Pagenation/Pagenation';
import { useQuery } from '@tanstack/react-query';
import getFetch from '../../utils/dataFetch/getFetch';

const UserPage = () => {
  const [userdata, setUserData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const token = getToken('TOKEN') || '';
  const location = useLocation();

  // const isModifyAllow = token !== '' ? { Authorization: token } : undefined;

  const accountId = location.state === null ? '' : location.state.accountId;

  const { data, isLoading } = useQuery<any>(['userPosting', page], async () => {
    if (accountId === '') {
      const response = await fetch(`${API.post}/mine/page/${page}`, {
        headers: { Authorization: token },
      });
      const data = await response.json();
      return data;
    } else {
      const response = await fetch(
        `${API.post}/user/page/${page}?accountId=${accountId}`
      );
      const data = await response.json();

      return data;
    }
  });

  useEffect(() => {
    if (accountId === '') {
      fetch(`${API.userpage}`, {
        headers: { Authorization: token },
      })
        .then(res => res.json())
        .then(data => setUserData(data));
    } else {
      fetch(`${API.userpage}?accountId=${accountId}`, {
        headers: { Authorization: token },
      })
        .then(res => res.json())
        .then(data => setUserData(data));
    }
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const pageLength = Math.ceil(data.totalCount / 5);

  return (
    <Container>
      <Section width={240}>
        <Profile userdata={userdata} modifyAllow={userdata.modifyAllowed} />
      </Section>
      <Section width={520}>
        <PostHeader
          title="제목"
          name="이름"
          views="조회수"
          likes="좋아요"
          createdAt="날짜"
        />
        {data.data?.map((data: any) => {
          return (
            <PostList
              key={data.postId}
              postId={data.postId}
              title={data.title}
              name={data.name}
              createdAt={data.createdAt}
              views={data.views}
              likes={data.likes}
            />
          );
        })}
        {data.data?.length > 0 && (
          <Pagenation
            setPage={page => {
              setPage(page);
            }}
            page={page}
            pageLength={pageLength}
            showCount={5}
          />
        )}
      </Section>
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
  min-height: 300px;
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
