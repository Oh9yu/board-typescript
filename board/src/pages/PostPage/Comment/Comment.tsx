import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CommentList from './CommentList/CommentList';
import CommentEditor from './CommentEditor/CommentEditor';

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
  const commentRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery(
    ['comments', id],
    ({ pageParam = 1 }) => {
      return getFetch(`${API.comment}?postId=${id}&page=${pageParam}`);
    },
    {
      staleTime: 30000,
      getNextPageParam: (lastPage, allPages) => {
        const pageLength = Math.ceil(lastPage.totalCount / 10);
        if (allPages.length < pageLength) {
          return allPages.length + 1;
        }
        return undefined;
      },
    }
  );

  console.log(' data :', data?.pages[0].data);

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

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <CommentHeader>댓글</CommentHeader>
      <CommentEditor postId={id || ''} />
      {data?.pages.map((pages: any, pageIdx: any) => {
        return pages.data.map(({ comment, author }: DataType) => {
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
              replyCount={comment?.replyCount}
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

const RefDiv = styled.div``;
