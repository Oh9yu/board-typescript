import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useCreatedAt from '../../utils/hook/useCreatedAt';

const PostList = ({ id, postId, title, name, views, likes, createdAt }) => {
  const navigate = useNavigate();
  const postTime = useCreatedAt(createdAt);

  const titleClickHandler = () => {
    navigate('/postpage', { state: { id: id, postId: postId } });
  };

  return (
    <List>
      <Section>
        <Text onClick={titleClickHandler}>{title}</Text>
      </Section>
      <Section>
        <Text>{name}</Text>
        <Text>{postTime}</Text>
        <Text>{views}</Text>
        <Text>{likes}</Text>
      </Section>
    </List>
  );
};

export default PostList;

const List = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  font-size: 14px;
  cursor: pointer;
`;
