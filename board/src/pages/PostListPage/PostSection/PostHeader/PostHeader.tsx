import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  name: string;
  views: string;
  likes: string;
  createdAt: string;
}

const PostHeader = ({ title, name, views, likes, createdAt }: Props) => {
  return (
    <List>
      <Section>
        <Text width={50}>{title}</Text>
      </Section>
      <Section>
        <Text width={20}>{name}</Text>
        <Text width={40}>{createdAt}</Text>
        <Text width={15}>{views}</Text>
        <Text width={15}>{likes}</Text>
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
  width: 50%;
`;

const Text = styled.p<{ width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width}%;
  font-size: 16px;
`;
