import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import PostList from '../../../components/PostList/PostList';
import PostHeader from './PostHeader/PostHeader';
import Pagenation from '../../../components/Pagenation/Pagenation';
import { useQuery } from '@tanstack/react-query';
import getFetch from '../../../utils/dataFetch/getFetch';

interface Props {
  catId: string | undefined;
  queryType: string | undefined;
  page: number;
  pageHandler: (page: number) => void;
}
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

const PostSection = ({ catId, queryType, page, pageHandler }: Props) => {
  const { data } = useQuery<DataType>(['subPostLists', [page, catId]], () => {
    if (!queryType) {
      return getFetch(`${API.post}/list?mainCatId=${catId}&page=${page}`);
    } else
      return getFetch(`${API.post}/list?${queryType}=${catId}&page=${page}`);
  });

  const pageLength = data ? Math.ceil(data.totalCount / 5) : 0;

  return (
    <Container>
      <PostHeader
        title="제목"
        name="이름"
        views="조회수"
        likes="좋아요"
        createdAt="날짜"
      />
      {data &&
        data.data.map(data => {
          return (
            <PostList
              key={data.postId}
              postId={data.postId}
              title={data.title}
              name={data.name}
              views={data.views}
              likes={data.likes}
              createdAt={data.createdAt}
            />
          );
        })}
      <Pagenation
        setPage={pageHandler}
        page={page}
        pageLength={pageLength}
        showCount={5}
      />
    </Container>
  );
};

export default PostSection;

const Container = styled.div`
  width: 80%;
  height: 600px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
