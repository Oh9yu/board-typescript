import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import LikeBtn from './LiikeBtn/LikeBtn';

const PostLikes = ({ token, postId }) => {
  const [likeData, setLikeData] = useState([]);

  //likeStatus, likeUsers
  useEffect(() => {
    fetch(`${API.likes}?postId=${postId}`, {
      headers: { Authorization: `${token}` },
    })
      .then(res => res.json())
      .then(data => setLikeData(data));
  }, []);

  console.log('like : ', likeData);

  return (
    <Container>
      <LikeBtn
        postId={postId}
        likesCount={likeData.likesCount}
        likeStatus={likeData.likeStatus}
      />
    </Container>
  );
};

export default PostLikes;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
