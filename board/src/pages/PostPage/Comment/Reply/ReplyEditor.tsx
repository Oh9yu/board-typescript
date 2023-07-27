import React, { useState } from 'react';
import { styled } from 'styled-components';
import postFetch from '../../../../utils/dataFetch/postFetch';
import getToken from '../../../../utils/getToken';
import { API } from '../../../../config/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface Props {
  postId: string;
  commentId: string;
}

const ReplyEditor = ({ postId, commentId }: Props) => {
  const token = getToken('TOKEN') || '';
  const [inputValue, setInputValue] = useState('');
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!token) {
      alert('로그인이 필요한 서비스입니다');
      navigate('/signin');
    }
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
      <ReplyInput
        value={inputValue}
        onChange={inputHandler}
        placeholder={
          !token ? '로그인이 필요한 서비스입니다' : '답글을 입력해 주세요'
        }
      />
      <ReplyButton
        onClick={() => {
          if (!inputValue || !token) return;
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

const ReplyInput = styled.input<{ theme: any }>`
  width: 100%;
  border: 2px solid ${props => props.theme.color1};
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.color3};
  }
`;

const ReplyButton = styled.button<{ theme: any }>`
  background-color: #fff;
  width: 100px;
  height: 40px;
  border: 2px solid ${props => props.theme.color3};
  border-radius: 4px;
  &:hover {
    background-color: ${props => props.theme.color2};
  }
`;
