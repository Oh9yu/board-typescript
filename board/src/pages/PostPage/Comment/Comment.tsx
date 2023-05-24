import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CommentList from './CommentList/CommentList';
import CommentEditor from './CommentEditor/CommentEditor';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import getFetch from '../../../utils/dataFetch/getFetch';

interface DataType {
  comment: CommentType;
  author: AuthorType;
  user: UserType;
}

interface CommentType {
  contents: string;
  createdAt: string;
  updatedAt: string;
  commentId: string;
  likes: number;
  usersWhoLiked?: string[];
}

interface AuthorType {
  accountId: string;
  name: string;
  email: string;
  profileImage?: string;
}

interface UserType {
  likeStatus: boolean;
  modifyAllowed: boolean;
  deleteAllowed: boolean;
}

const Comment = () => {
  // const [data, setData] = useState<DataType[]>([]);
  const { id } = useParams();

  // useEffect(() => {
  //   fetch(`${API.comment}?postId=${id}`)
  //     .then(res => res.json())
  //     .then(data => setData(data));
  // }, [id]);

  const { data, isLoading } = useQuery<DataType[]>(
    ['comment', id],
    () => {
      return getFetch(`${API.comment}?postId=${id}&page=1`);
    },
    { staleTime: 30000 }
  );

  return (
    <Container>
      <CommentHeader>댓글</CommentHeader>
      <CommentEditor postId={id || ''} />
      {data &&
        data.map(({ comment, author }) => {
          return (
            <CommentList
              key={comment?.commentId}
              postId={id || ''}
              id={comment?.commentId}
              name={author?.name}
              createdAt={comment?.createdAt}
              contents={comment?.contents}
              likes={comment?.likes}
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
  @media screen and (max-width: 600px) {
    padding: 10px 15px;
  }
`;
