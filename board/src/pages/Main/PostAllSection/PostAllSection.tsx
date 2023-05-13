import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import MainPostList from './MainPostList/MainPostList';
import Pagenation from '../../../components/Pagenation/Pagenation';

interface Data {
  accountId: string;
  mainCatId: string;
  subCatId: string;
  title: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  postId: string;
  name: string;
  email: string;
  profileImage: string;
  likes: number;
  mainCatName: string;
  subCatName: string;
}

interface DataType {
  totalCount: number;
  data: Data[];
}

const PostAllSection = () => {
  const [data, setData] = useState<DataType>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${API.post}/list?page=${page}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [page]);

  if (!data) return <div>로딩</div>;

  return (
    <Container>
      <ListHeader>전체글 보기</ListHeader>
      {data.data.map(data => {
        return <MainPostList key={data.postId} data={data} />;
      })}
      <Pagenation
        setPage={page => {
          setPage(page);
        }}
        page={page}
        totalCount={data.totalCount}
        pageLength={Math.ceil(data.totalCount / 5)}
      />
    </Container>
  );
};

export default PostAllSection;

const Container = styled.div`
  width: 100%;
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 40px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;
