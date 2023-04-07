import React, { useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import LikeBtn from './LiikeBtn/LikeBtn';

const PostLikes = ({ token, postId }) => {
  useEffect(() => {
    fetch(`${API.likes}`, { headers: { Authorization: `${token}` } });
  }, []);

  return (
    <Container>
      <LikeBtn postId={postId} />
    </Container>
  );
};

export default PostLikes;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
