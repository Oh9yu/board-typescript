import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CommentList from './CommentList/CommentList';
import CommentEditor from './CommentEditor/CommentEditor';

import getFetch from '../../../utils/dataFetch/getFetch';
import Spinner from '../../../components/Spinner/Spinner';
import getToken from '../../../utils/getToken';

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
  replyCount: number;
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
  const { id } = useParams();
  const token = getToken('TOKEN') || '';
  const commentRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, isLoading } = useInfiniteQuery(
    ['comments', id],
    ({ pageParam = 1 }) => {
      return fetch(`${API.comment}?postId=${id}&page=${pageParam}`, {
        headers: { Authorization: token },
      }).then(res => res.json());
    },
    {
      staleTime: 30000,
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        fetchNextPage();
      }
    });
    if (commentRef.current) {
      observer.observe(commentRef.current);
    }

    return () => observer.disconnect();
  }, [commentRef]);

  if (isLoading) return <Spinner />;

  return (
    <Container>
      <CommentHeader>댓글</CommentHeader>
      <CommentEditor postId={id || ''} />
      {data?.pages.map((pages: any, pageIdx: any) => {
        return pages.data.map(({ comment, author, user }: DataType) => {
          return (
            <CommentList
              key={comment?.commentId}
              postId={id || ''}
              profileImg={author?.profileImage || ''}
              accountId={author?.accountId}
              id={comment?.commentId}
              name={author?.name}
              createdAt={comment?.createdAt}
              contents={comment?.contents}
              likes={comment?.likes}
              commentId={comment?.commentId}
              replyCount={comment?.replyCount}
              modifyAllowed={user?.modifyAllowed}
            />
          );
        });
      })}
      <RefDiv ref={commentRef} />
    </Container>
  );
};
export default Comment;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const CommentHeader = styled.div<{ theme: any }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  font-size: 12px;
  border: 2px solid ${props => props.theme.color2};
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    padding: 10px 15px;
  }
`;

const RefDiv = styled.div``;
