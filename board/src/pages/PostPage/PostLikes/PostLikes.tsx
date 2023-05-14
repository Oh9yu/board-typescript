import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import LikeBtn from './LiikeBtn/LikeBtn';
import LikeUser from './LikeUser/LikeUser';

interface Props {
  likes: number;
  likeStatus: boolean;
  postId: string;
  usersWhoLiked: string[];
}

const PostLikes = ({ likes, likeStatus, postId, usersWhoLiked }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container>
      <Button
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <LikeBtn likeStatus={likeStatus} postId={postId} likes={likes} />
        {usersWhoLiked?.length > 0 && isHover && (
          <LikeUser usersWhoLiked={usersWhoLiked} />
        )}
      </Button>
    </Container>
  );
};

export default PostLikes;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  position: relative;
  display: inline;
`;
