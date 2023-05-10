import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import PostList from '../../../components/PostList/PostList';
import PostHeader from './PostHeader/PostHeader';

const PostSection = ({ status, mainCatId, queryType }) => {
  const [postData, setPostData] = useState([]);

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
      {postData.data?.map(e => {
        return (
          <PostList
            key={e.postId}
            postId={e.postId}
            title={e.title}
            name={e.name}
            views={e.views}
            likes={e.likes}
            createdAt={e.createdAt}
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
`;
