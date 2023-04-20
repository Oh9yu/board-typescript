import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config/config';
import getToken from '../../utils/getToken';
import PostContent from './PostContent/PostContent';
import PostHeader from './PostHeader/PostHeader';
import PostLikes from './PostLikes/PostLikes';
import Comment from './Comment/Comment';

const PostPage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const token = getToken();

  useEffect(() => {
    fetch(`${API.post}?postId=${location.state.postId}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <Container>
      <PostHeader
        title={data.post?.title}
        createdAt={data.post?.createdAt}
        name={data.author?.name}
        views={data.post?.views}
      />
      <PostContent content={data.post?.contents} />
      <PostLikes
        token={token}
        postId={location.state.postId}
        likes={data.post?.likes}
        likeStatus={data.user?.likeStatus}
        usersWhoLiked={data.post?.usersWhoLiked}
      />
      <Comment comments={data.comments} postId={location.state.postId} />
    </Container>
  );
};

export default PostPage;

const Container = styled.div`
  width: 1024px;
  height: 100vh;
  margin: auto;
  padding-top: 100px;
`;
