import React, { useState } from 'react';
import styled from 'styled-components';
import getToken from '../../../../utils/getToken';
import { API } from '../../../../config/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import postFetch from '../../../../utils/dataFetch/postFetch';

interface Props {
  postId: string;
}

const CommentEditor = ({ postId }: Props) => {
  const token = getToken('TOKEN') || '';
  const [inputValue, setInputValue] = useState('');
  const queryClient = useQueryClient();

  const postMutation = useMutation(
    () => {
      return postFetch(`${API.comment}`, token, {
        postId: postId,
        contents: inputValue,
      });
    },
    {
      onSuccess: () => {
        setInputValue('');
        // queryClient.invalidateQueries(['comment', postId]);
      },
    }
  );

  return (
    <Container>
      <Text fontSize={12} color="#333">
        댓글쓰기
      </Text>
      {!token && (
        <Text fontSize={10} color="red">
          로그인이 필요한 서비스입니다
        </Text>
      )}
      <Section>
        <CommentInput
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
        <Btn
          type="button"
          onClick={() => {
            if (!inputValue) return;
            postMutation.mutate();
          }}
          disabled={token ? false : true}
        >
          등록
        </Btn>
      </Section>
    </Container>
  );
};

export default CommentEditor;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #eee;
`;

const Text = styled.p<{ fontSize: number }>`
  padding: 5px;
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
`;

const CommentInput = styled.textarea`
  margin-top: 3px;
  padding: 5px;
  width: 900px;
  height: 60px;
  border: 2px solid #c9d9f9;
  border-radius: 5px;
  resize: none;
  overflow: scroll;
  &:focus {
    outline: none;
    border-color: #7594dd;
  }
  @media screen and (max-width: 600px) {
    width: 600px;
    height: 50px;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.button`
  width: 80px;
  height: 58px;
  border: none;
  border-radius: 5px;
  background-color: #c9d9f9;
  border: 2px solid #7594dd;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    width: 60px;
    height: 48px;
  }
`;
