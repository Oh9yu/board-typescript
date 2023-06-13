import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import PostList from '../../../components/PostList/PostList';
import PostHeader from './PostHeader/PostHeader';
import Pagenation from '../../../components/Pagenation/Pagenation';
import { useQuery } from '@tanstack/react-query';
import getFetch from '../../../utils/dataFetch/getFetch';

interface Props {
  status: string | undefined;
  mainCatId: string;
  queryType: string | undefined;
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

const PostSection = ({ status, mainCatId, queryType }: Props) => {
  const [postData, setPostData] = useState<DataType>();
  const [page, setPage] = useState(1);

  console.log(status);

  const { data } = useQuery(['subPostLists', [page, status]], () => {
    return getFetch(`${API.post}/list?subCatId=${status}&page=${page}`);
  });

  // useEffect(() => {
  //   if (!queryType || queryType === undefined) return;
  //   fetch(`${API.post}/list?${queryType}=${status}`)
  //     .then(res => res.json())
  //     .then(data => setPostData(data));
  // }, [status]);

  // useEffect(() => {
  //   fetch(`${API.post}/list?mainCatId=${mainCatId}`)
  //     .then(res => res.json())
  //     .then(data => setPostData(data));
  // }, []);

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
        data.data.map((data: any) => {
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

export default PostSection;

const Container = styled.div`
  width: 80%;
  height: 600px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
