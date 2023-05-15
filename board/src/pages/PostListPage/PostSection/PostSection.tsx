import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import PostList from '../../../components/PostList/PostList';
import PostHeader from './PostHeader/PostHeader';

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

  useEffect(() => {
    if (!queryType || queryType === undefined) return;
    fetch(`${API.post}/list?${queryType}=${status}`)
      .then(res => res.json())
      .then(data => setPostData(data));
  }, [status]);

  useEffect(() => {
    fetch(`${API.post}/list?mainCatId=${mainCatId}`)
      .then(res => res.json())
      .then(data => setPostData(data));
  }, []);

  return (
    <Container>
      <PostHeader
        title="제목"
        name="이름"
        views="조회수"
        likes="좋아요"
        createdAt="날짜"
      />
      {postData &&
        postData.data.map(data => {
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
