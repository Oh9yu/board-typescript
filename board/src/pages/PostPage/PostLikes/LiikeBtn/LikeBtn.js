import React from 'react';
import styled from 'styled-components';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';

const like = { color: '#5173c2', img: 'images/like.png' };

const unlike = { color: '#111', img: 'images/unlike.png' };

const LikeBtn = ({ postId, likeStatus, likesCount }) => {
  const token = getToken();
  const status = likeStatus ? like : unlike;

  const likeHandler = () => {
    fetch(`${API.likes}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ postId }),
    });
  };

  return (
    <LikesBtn color={status.color} onClick={likeHandler}>
      <LikeImg src={`../${status.img}`} />
      <Text color={status.color}>{likesCount}</Text>
    </LikesBtn>
  );
};

export default LikeBtn;

const LikesBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 60px;
  padding: 5px;
  border: 2px solid ${props => props.color};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c9d9f9;
    transition: 0.2s;
  }
`;

const LikeImg = styled.img`
  width: 40px;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  color: ${props => props.color};
`;
