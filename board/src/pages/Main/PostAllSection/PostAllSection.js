import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import MainPostList from './MainPostList/MainPostList';

const PostAllSection = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${API.post}/list`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

  return (
    <Container>
      <ListHeader>전체글 보기</ListHeader>
      {data.data?.map(data => {
        return <MainPostList key={data.postId} data={data} />;
      })}
    </Container>
  );
};

export default PostAllSection;

const Container = styled.div``;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 40px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;
