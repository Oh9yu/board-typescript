import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import MainPostList from './MainPostList/MainPostList';
import Pagenation from '../../../components/Pagenation/Pagenation';

const PostAllSection = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${API.post}/list?page=${page}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [page]);

  console.log(data);

  console.log(page);

  return (
    <Container>
      <ListHeader>전체글 보기</ListHeader>
      {data.data?.map(data => {
        return <MainPostList key={data.postId} data={data} />;
      })}
      <Pagenation
        setPage={pageNum => {
          setPage(pageNum);
        }}
        page={page}
        totalCount={data.totalCount}
        pageLength={Math.ceil(data?.totalCount / 5)}
      />
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
