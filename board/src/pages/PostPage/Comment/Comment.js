import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CommentList from './CommentList/CommentList';
import CommentEditor from './CommentEditor/CommentEditor';
import { useParams } from 'react-router-dom';

const Comment = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API.comment}?postId=${id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [id, data]);

  return (
    <Container>
      <CommentHeader>댓글</CommentHeader>
      {data?.map(({ comment, author }) => {
        return (
          <CommentList
            key={comment?.commentId}
            postId={id}
            id={comment?.commentId}
            name={author?.name}
            createdAt={comment?.createdAt}
            contents={comment?.contents}
            likes={comment?.likes}
          />
        );
      })}
      <CommentEditor postId={id} />
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
