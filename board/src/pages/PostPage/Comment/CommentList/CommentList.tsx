import React, { useState } from 'react';
import styled from 'styled-components';
import useCreatedAt from '../../../../utils/hook/useCreatedAt';
import CommentUser from './CommentUser/CommentUser';
import CommentLike from './CommentLike';
import { FaRegComment } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '../../../../config/config';
import ReplyEditor from '../Reply/ReplyEditor';
import getToken from '../../../../utils/getToken';
import ReplyLists from '../Reply/ReplyLists';
import Spinner from '../../../../components/Spinner/Spinner';
import Button from '../../../../components/Button/Button';
import editFetch from '../../../../utils/dataFetch/editFetch';

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
  modifyAllowed: boolean;
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
  modifyAllowed,
}: Props) => {
  const commentTime = useCreatedAt(createdAt);
  const [isOpen, setIsOpen] = useState(false);
  const token = getToken('TOKEN') || '';
  const [commentEdit, setCommentEdit] = useState(false);
  const [editValue, setEditValue] = useState(contents);
  const queryClient = useQueryClient();

  const editHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const editMutation = useMutation(
    () => {
      return editFetch(`${API.comment}`, token, {
        commentId: commentId,
        newContents: editValue,
      });
    },
    {
      onSuccess: () => {
        setCommentEdit(prev => !prev);
        queryClient.invalidateQueries(['comments', postId]);
      },
    }
  );

  const deleteMutation = useMutation(
    () => {
      return fetch(`${API.comment}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify({ commentId: commentId }),
      }).then(res => res.json());
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['comments', postId]);
      },
    }
  );

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
        <Section width="max-content">
          {modifyAllowed && (
            <Button
              name={!commentEdit ? '댓글 수정' : '수정 취소'}
              onClick={() => {
                setCommentEdit(prev => !prev);
              }}
              fontSize={4}
            />
          )}
          {modifyAllowed && (
            <Button
              name="댓글 삭제"
              onClick={() => {
                deleteMutation.mutate();
              }}
              fontSize={4}
            />
          )}
          <Text color="#666" fontSize={12}>
            {commentTime}
          </Text>
        </Section>
      </Section>
      {!commentEdit ? (
        <ContentSection>{contents}</ContentSection>
      ) : (
        <Wrapper>
          <ReplyInput
            value={editValue}
            onChange={editHandler}
            placeholder="수정할 댓글을 입력해주세요"
          />
          <ReplyButton
            onClick={() => {
              if (!editValue) return;
              editMutation.mutate();
            }}
          >
            댓글 수정
          </ReplyButton>
        </Wrapper>
      )}
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

const Section = styled.div<{ width: string; fontSize?: number }>`
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

const Text = styled.p<{ color: string; fontSize?: number }>`
  max-width: 800px;
  margin-left: 8px;
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
`;

const Wrapper = styled.section`
  display: flex;
`;

const ReplyInput = styled.input`
  width: 100%;
  border: 2px solid #c9d9f9;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #7594dd;
  }
`;

const ReplyButton = styled.button`
  background-color: #fff;
  width: 80px;
  height: 30px;
  border: 2px solid #b0cbff;
  border-radius: 4px;
  &:hover {
    background-color: #c9d9f9;
  }
`;
