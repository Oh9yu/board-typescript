import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../../../config/config';
import getToken from '../../../../../utils/getToken';

const CommentLike = ({ id, postId }) => {
  const [likeCount, setLikeCount] = useState(0);
  const token = getToken();

  useEffect(() => {
    fetch(`${API.likes}/comment`, {
      headers: { Authorization: `${token}` },
    })
      .then(res => res.json())
      .then(data => {
        setLikeCount(data.likesCount);
      });
  }, []);

  const likeHandler = () => {
    fetch(`${API.likes}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ postId: postId, commentId: id }),
    })
      .then(res => res.json())
      .then(res => console.log(res.message));
  };

  return (
    <Container>
      <LikeBtn src="images/unlike.png" onClick={likeHandler} />
      {likeCount}
    </Container>
  );
};

export default CommentLike;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50px;
`;

const LikeBtn = styled.img`
  width: 18px;
  cursor: pointer;
`;
