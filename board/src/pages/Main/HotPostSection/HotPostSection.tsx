import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LikesCountPosts from './LikesCountPosts/LikesCountPosts';
import ViewCountPosts from './ViewsCountPosts/ViewCountPosts';
import { API } from '../../../config/config';
import { useQuery } from '@tanstack/react-query';
import getFetch from '../../../utils/dataFetch/getFetch';

interface DataType {
  topViewPosts: TopViewPosts[];
  topLikePosts: TopLikePosts[];
}

interface TopViewPosts {
  _id: string;
  accountId: string;
  mainCatId: string;
  subCatId: string;
  title: string;
  contents: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface TopLikePosts {
  accountId: string;
  title: string;
  views: number;
  createdAt: string;
  postId: string;
  likes: number;
}

const HotPostSection = () => {
  const { data } = useQuery<DataType>(
    ['hotPost'],
    () => {
      return getFetch(`${API.post}/top`);
    },
    { staleTime: 30000, keepPreviousData: true, enabled: !!HotPostSection }
  );

  console.log(data);

  return (
    <Container>
      <ViewCountPosts data={data?.topViewPosts} />
      <LikesCountPosts data={data?.topLikePosts} />
    </Container>
  );
};

export default HotPostSection;

const Container = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  width: 95%;
  gap: 20px;
  height: 200px;
  margin-top: 20px;
  @media screen and (max-width: 750px) {
    height: max-content;
    gap: 10px;
    flex-direction: column;
  }
`;
