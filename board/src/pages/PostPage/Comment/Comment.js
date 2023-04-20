import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CommentList from './CommentList/CommentList';
import CommentEditor from './CommentEditor/CommentEditor';

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${API.comment}?postId=${postId}`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [comments]);

  return (
    <Container>
      <CommentHeader>댓글</CommentHeader>
      {comments?.map(e => {
        return (
          <CommentList
            key={e.comment?.commentId}
            postId={postId}
            id={e.comment?.commentId}
            name={e.author?.name}
            createdAt={e.comment?.createdAt}
            contents={e.comment?.contents}
          />
        );
      })}
      <CommentEditor postId={postId} />
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
