import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';

const like = { color: '#5173c2', img: 'images/like.png' };

const unlike = { color: '#111', img: 'images/unlike.png' };

interface Props {
  likes: number;
  likeStatus: boolean;
  postId: string;
}

const LikeBtn = ({ likes, likeStatus, postId }: Props) => {
  const token = getToken('TOKEN');
  const [isLike, setIsLike] = useState({ likeStatus: false, likesCount: 0 });
  const isStatus = isLike.likeStatus ? like : unlike;

  useEffect(() => {
    setIsLike({ ...isLike, likeStatus: likeStatus, likesCount: likes });
  }, [likes]);

  const likeHandler = () => {
    fetch(`${API.likes}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ postId }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'Created like') {
          return setIsLike({
            ...isLike,
            likeStatus: true,
            likesCount: isLike.likesCount + 1,
          });
        } else if (res.message === 'Deleted like') {
          return setIsLike({
            ...isLike,
            likeStatus: false,
            likesCount: isLike.likesCount - 1,
          });
        }
      });
  };

  return (
    <LikesBtn color={isStatus.color} onClick={likeHandler}>
      <LikeImg src={`../${isStatus.img}`} />
      <Text color={isStatus.color}>{isLike.likesCount}</Text>
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
  @media screen and (max-width: 600px) {
    width: 100px;
    height: 50px;
  }
`;

const LikeImg = styled.img`
  width: 40px;
  @media screen and (max-width: 600px) {
    width: 30px;
  }
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  color: ${props => props.color};
`;
