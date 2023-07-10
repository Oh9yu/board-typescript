import React, { useState } from 'react';
import { styled } from 'styled-components';
import Button from '../../../../components/Button/Button';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import editFetch from '../../../../utils/dataFetch/editFetch';
import getCreatedAt from '../../../../utils/getCreatedAt';

export interface ReplyType {
  comment: Comment;
  author: Author;
  user: User;
  postId: string;
  commentId: string;
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

const ReplyLists = ({
  author,
  comment,
  user,
  postId,
  commentId,
}: ReplyType) => {
  const token = getToken('TOKEN') || '';
  const queryClient = useQueryClient();
  const [replyEditMode, setReplyEditMode] = useState(false);
  const [editInputValue, setEditInputValue] = useState(comment.contents);
  const createdAt = getCreatedAt(comment.createdAt);

  const deleteMutation = useMutation(
    () => {
      return fetch(`${API.comment}/reply`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify({ replyId: comment.commentId }),
      }).then(res => res.json());
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['comments', postId]);
        queryClient.invalidateQueries(['reply', commentId]);
      },
    }
  );

  const EditHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const editMutation = useMutation(
    () => {
      return editFetch(`${API.comment}/reply`, token, {
        replyId: comment.commentId,
        newContents: editInputValue,
      });
    },
    {
      onSuccess: () => {
        setReplyEditMode(prev => !prev);
        queryClient.invalidateQueries(['reply', commentId]);
      },
    }
  );

  return (
    <ReplyContainer>
      <ReplyHeader>
        <ReplyProfile>
          <ProfileImg src={author.profileImage} />
          <Text color="#777" fontSize={14}>
            {author.name}
          </Text>
        </ReplyProfile>
        <ReplySubHeader>
          {user.modifyAllowed && (
            <Button
              name={!replyEditMode ? '답글 수정' : '수정 취소'}
              fontSize={4}
              onClick={() => {
                setReplyEditMode(prev => !prev);
              }}
            />
          )}
          {user.modifyAllowed && (
            <Button
              name="답글 삭제"
              fontSize={4}
              onClick={() => {
                deleteMutation.mutate();
              }}
            />
          )}
          <Text fontSize={12} color="#555">
            {createdAt}
          </Text>
        </ReplySubHeader>
      </ReplyHeader>
      {!replyEditMode ? (
        <ReplytContent>
          <Text fontSize={14} color="#666">
            {comment.contents}
          </Text>
        </ReplytContent>
      ) : (
        <Section>
          <ReplyInput
            value={editInputValue}
            onChange={EditHandler}
            placeholder="수정할 답글을 입력해주세요"
          />
          <ReplyButton
            onClick={() => {
              if (!editInputValue) return;
              editMutation.mutate();
            }}
          >
            답글 수정
          </ReplyButton>
        </Section>
      )}
    </ReplyContainer>
  );
};

export default ReplyLists;

const ReplyContainer = styled.div`
  border-top: 1px solid #ccc;
  margin-left: 30px;
  padding: 8px;
`;

const ReplyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px;
`;

const ReplyProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 30px;
  border-radius: 15px;
`;

const ReplySubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
`;

const ReplytContent = styled.div`
  padding: 6px;
`;

const Text = styled.p<{ color: string; fontSize?: number }>`
  max-width: 800px;
  margin-left: 8px;
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
`;

const Section = styled.section`
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
