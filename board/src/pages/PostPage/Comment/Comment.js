import React, { useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CommentList from './CommentList/CommentList';

const Comment = ({ comments, postId }) => {
  console.log(comments);
  return (
    <Container>
      <CommentHeader>댓글</CommentHeader>
      {comments?.map(e => {
        return (
          <CommentList
            key={e.accountId}
            postId={postId}
            id={e._id}
            name={e.name}
            createdAt={e.createdAt}
            contents={e.contents}
          />
        );
      })}
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  font-size: 12px;
  border: 2px solid #c9d9f9;
  border-radius: 5px;
`;
