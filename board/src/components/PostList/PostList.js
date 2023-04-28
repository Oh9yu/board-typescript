import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useCreatedAt from '../../utils/hook/useCreatedAt';

const PostList = ({ postId, title, name, views, likes, createdAt }) => {
  const navigate = useNavigate();
  const postTime = useCreatedAt(createdAt);

  const titleClickHandler = () => {
    navigate(`/postpage/${postId}`);
  };

  return (
    <List>
      <Section>
        <Text width={400} onClick={titleClickHandler}>
          {title}
        </Text>
      </Section>
      <Section>
        <Text width={20}>{name}</Text>
        <Text width={40}>{postTime}</Text>
        <Text width={15}>{views}</Text>
        <Text width={15}>{likes}</Text>
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
  width: 50%;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width}%;
  font-size: 14px;
  cursor: pointer;
`;
