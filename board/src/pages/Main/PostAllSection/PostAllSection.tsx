import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import MainPostList from './MainPostList/MainPostList';
import Pagenation from '../../../components/Pagenation/Pagenation';
import getFetch from '../../../utils/dataFetch/getFetch';
import Spinner from '../../../components/Spinner/Spinner';

interface DataType {
  totalCount: number;
  data: Data[];
}
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

const PostAllSection = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery<DataType>(
    ['postLists', page],
    () => {
      return getFetch(`${API.post}/list?page=${page}`);
    },
    {
      staleTime: 30000,
      keepPreviousData: true,
    }
  );
  const pageLength = data ? Math.ceil(data.totalCount / 5) : 0;

  console.log(data);

  if (!data) return <Spinner />;

  return (
    <Container>
      <ListHeader>전체글 보기</ListHeader>
      {data.data?.map(data => {
        return <MainPostList key={data.postId} data={data} />;
      })}
      <Pagenation
        setPage={page => {
          setPage(page);
        }}
        page={page}
        pageLength={pageLength}
        showCount={5}
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
  border: 2px solid ${props => props.theme.borderColor2};
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 8px;
    margin-top: 10px;
  }
`;
