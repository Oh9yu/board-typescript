import React, { useState } from 'react';
import { styled } from 'styled-components';
import postFetch from '../../../../utils/dataFetch/postFetch';
import getToken from '../../../../utils/getToken';
import { API } from '../../../../config/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Props {
  postId: string;
  commentId: string;
}

const ReplyEditor = ({ postId, commentId }: Props) => {
  const token = getToken('TOKEN') || '';
  const [inputValue, setInputValue] = useState('');
  const queryClient = useQueryClient();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const replyMutation = useMutation(
    () => {
      return postFetch(`${API.comment}/reply`, token, {
        postId: postId,
        commentId: commentId,
        contents: inputValue,
      });
    },
    {
      onSuccess: () => {
        setInputValue('');
        queryClient.invalidateQueries(['comments', postId]);
        queryClient.invalidateQueries(['reply', commentId]);
      },
    }
  );

  return (
    <Section>
      <ReplyInput value={inputValue} onChange={inputHandler} />
      <ReplyButton
        onClick={() => {
          if (!inputValue) return;
          replyMutation.mutate();
        }}
      >
        답글 등록
      </ReplyButton>
    </Section>
  );
};

export default ReplyEditor;

const Section = styled.section`
  display: flex;
  margin-left: 30px;
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
  width: 100px;
  height: 40px;
  border: 2px solid #b0cbff;
  border-radius: 4px;
  &:hover {
    background-color: #c9d9f9;
  }
`;
