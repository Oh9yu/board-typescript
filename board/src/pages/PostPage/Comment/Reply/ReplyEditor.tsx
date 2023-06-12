import React, { useState } from 'react';
import { styled } from 'styled-components';
import postFetch from '../../../../utils/dataFetch/postFetch';
import getToken from '../../../../utils/getToken';
import { API } from '../../../../config/config';
import { useMutation } from '@tanstack/react-query';

interface Props {
  postId: string;
  commentId: string;
}

const ReplyEditor = ({ postId, commentId }: Props) => {
  const token = getToken('TOKEN') || '';
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const replyMutation = useMutation(() => {
    return postFetch(`${API.comment}/reply`, token, {
      postId: postId,
      commentId: commentId,
      contents: inputValue,
    });
  });

  return (
    <Section>
      <ReplyInput value={inputValue} onChange={inputHandler} />
      <ReplyButton
        onClick={() => {
          replyMutation.mutate();
        }}
      />
    </Section>
  );
};

export default ReplyEditor;

const Section = styled.section`
  background-color: #ddd;
  display: flex;
`;

const ReplyInput = styled.input``;

const ReplyButton = styled.button``;
