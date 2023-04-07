import React from 'react';
import styled from 'styled-components';

const PostHeader = ({ title, name, views, likes, createdAt }) => {
  return (
    <List>
      <Section>
        <Text>{title}</Text>
      </Section>
      <Section>
        <Text>{name}</Text>
        <Text>{createdAt}</Text>
        <Text>{views}</Text>
        <Text>{likes}</Text>
      </Section>
    </List>
  );
};

export default PostHeader;

const List = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-top: 2px solid #7594dd;
  border-bottom: 2px solid #7594dd;
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
  width: 100px;
  font-size: 16px;
`;
