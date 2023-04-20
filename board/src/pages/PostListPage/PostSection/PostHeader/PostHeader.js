import React from 'react';
import styled from 'styled-components';

const PostHeader = ({ title, name, views, likes, createdAt }) => {
  return (
    <List>
      <Section>
        <Text width={400}>{title}</Text>
      </Section>
      <Section>
        <Text width={100}>{name}</Text>
        <Text width={150}>{createdAt}</Text>
        <Text width={50}>{views}</Text>
        <Text width={50}>{likes}</Text>
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
  width: ${props => props.width}px;
  font-size: 16px;
`;
