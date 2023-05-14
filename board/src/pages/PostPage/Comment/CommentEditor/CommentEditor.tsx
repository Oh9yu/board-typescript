import React, { useState } from 'react';
import styled from 'styled-components';
import getToken from '../../../../utils/getToken';
import { API } from '../../../../config/config';

interface Props {
  postId: string;
}

const CommentEditor = ({ postId }: Props) => {
  const token = getToken('TOKEN') || '';
  const [inputValue, setInputValue] = useState('');

  const clickHandler = () => {
    if (!inputValue) return;
    fetch(`${API.comment}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        postId: postId,
        contents: inputValue,
      }),
    }).then(res => res.json());
    setInputValue('');
  };

  return (
    <Container>
      <Text fontsize={12} color="#333">
        댓글쓰기
      </Text>
      {!token && (
        <Text fontsize={10} color="red">
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
          onClick={clickHandler}
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

const Text = styled.p<{ fontsize: number }>`
  padding: 5px;
  font-size: ${props => props.fontsize}px;
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
`;
