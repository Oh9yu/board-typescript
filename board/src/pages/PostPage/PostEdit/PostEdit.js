import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostEdit = ({ title, contents, postId }) => {
  const navigate = useNavigate('');

  const clickHandler = () => {
    navigate('/editor', {
      state: { title: title, contents: contents, postId: postId },
    });
  };

  return <Container onClick={clickHandler}>변경</Container>;
};

export default PostEdit;

const Container = styled.div`
  width: 100px;
  height: 50px;
  background-color: #aaa;
`;
