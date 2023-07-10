import React, { useState } from 'react';
import styled from 'styled-components';
import useCreatedAt from '../../../../utils/hook/useCreatedAt';
import CommentUser from './CommentUser/CommentUser';
import CommentLike from './CommentLike';
import { FaRegComment } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import getFetch from '../../../../utils/dataFetch/getFetch';
import { API } from '../../../../config/config';
import ReplyEditor from '../Reply/ReplyEditor';
import getToken from '../../../../utils/getToken';
import ReplyLists from '../Reply/ReplyLists';
import Spinner from '../../../../components/Spinner/Spinner';

interface Props {
  name: string;
  id: string;
  postId: string;
  createdAt: string;
  contents: string;
  likes: number;
  replyCount: number;
  profileImg: string;
  commentId: string;
  accountId: string;
}

export type ReplyData = Reply[];

export interface Reply {
  comment: Comment;
  author: Author;
  user: User;
}

export interface Comment {
  contents: string;
  createdAt: string;
  updatedAt: string;
  commentId: string;
  likes: number;
}

export interface Author {
  accountId: string;
  name: string;
  email: string;
  profileImage: string;
}

export interface User {
  likeStatus: boolean;
  modifyAllowed: boolean;
  deleteAllowed: boolean;
}

const CommentList = ({
  name,
  id,
  postId,
  createdAt,
  contents,
  likes,
  replyCount,
  profileImg,
  commentId,
  accountId,
}: Props) => {
  const commentTime = useCreatedAt(createdAt);
  const [isOpen, setIsOpen] = useState(false);
  const token = getToken('TOKEN') || '';

  const { data, isLoading } = useQuery<ReplyData>(['reply', commentId], () => {
    return fetch(`${API.comment}/reply?commentId=${commentId}`, {
      headers: { Authorization: token },
    }).then(res => res.json());
  });

  if (isLoading) return <Spinner />;

  return (
    <List>
      <Section width="100%" fontSize={12}>
        <CommentUser
          name={name}
          profileImg={profileImg}
          accountId={accountId}
        />
        <Section width="100px" fontSize={12}>
          {commentTime}
        </Section>
      </Section>
      <ContentSection>{contents}</ContentSection>
      <ReplySection>
        <CommentLike id={id} postId={postId} likes={likes} />
        {isOpen ? (
          <ReplyWrap>
            <FaRegCommentDots
              size={20}
              style={{ cursor: 'pointer', marginRight: 10 }}
              onClick={() => setIsOpen(prev => !prev)}
            />
            {replyCount}
          </ReplyWrap>
        ) : (
          <ReplyWrap>
            <FaRegComment
              size={20}
              style={{ cursor: 'pointer', marginRight: 10 }}
              onClick={() => {
                setIsOpen(prev => !prev);
              }}
            />
            {replyCount}
          </ReplyWrap>
        )}
      </ReplySection>
      {isOpen &&
        data?.map(data => {
          return (
            <ReplyLists
              key={data.comment.commentId}
              author={data.author}
              comment={data.comment}
              user={data.user}
              postId={postId}
              commentId={commentId}
            />
          );
        })}
      {isOpen && <ReplyEditor postId={postId} commentId={id} />}
    </List>
  );
};

export default CommentList;

const List = styled.div`
  padding: 10px;
  border-bottom: 1px solid #c9d9f9;
`;

const Section = styled.div<{ width: string; fontSize: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};
  font-size: ${props => props.fontSize}px;
  color: #666;
`;

const ContentSection = styled.div`
  font-size: 16px;
`;

const ReplySection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 10px 0px;
`;

const ReplyWrap = styled.div`
  display: flex;
`;
