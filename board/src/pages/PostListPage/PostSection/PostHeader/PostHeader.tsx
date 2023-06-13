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
        <Text width={50} mobile={50}>
          {title}
        </Text>
      </Section>
      <Section>
        <Text width={20} mobile={25}>
          {name}
        </Text>
        <Text width={40} mobile={35}>
          {createdAt}
        </Text>
        <Text width={15} mobile={20}>
          {views}
        </Text>
        <Text width={15} mobile={20}>
          {likes}
        </Text>
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

const Text = styled.p<{ width: number; mobile: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width}%;
  font-size: 14px;
  @media screen and (max-width: 750px) {
    width: ${props => props.mobile}%;
    font-size: 12px;
  }
`;
