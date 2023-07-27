import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../../config/config';
import getToken from '../../../utils/getToken';

interface Props {
  title: string;
  contents: any;
  postId: string;
}

const PostEdit = ({ title, contents, postId }: Props) => {
  const token = getToken('TOKEN') || '';
  const navigate = useNavigate();

  const editHandler = () => {
    navigate('/editor', {
      state: { title: title, contents: contents, postId: postId },
    });
  };

  const deleteHandler = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      fetch(`${API.post}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify({ postId: postId }),
      })
        .then(res => res.json())
        .then(res => {
          alert(res.message);
          navigate('/');
        });
    }
  };

  return (
    <Container>
      <Btn onClick={editHandler}>게시글 수정</Btn>
      <Btn onClick={deleteHandler}>게시글 삭제</Btn>
    </Container>
  );
};

export default PostEdit;

const Container = styled.div`
  position: absolute;
  display: flex;
  right: 0;
`;

const Btn = styled.button<{ theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin: 10px;
  padding: 5px;
  border: 2px solid ${props => props.theme.color1};
  background-color: #fff;
  border-radius: 3px;
  &:hover {
    background-color: ${props => props.theme.color1};
  }
`;
