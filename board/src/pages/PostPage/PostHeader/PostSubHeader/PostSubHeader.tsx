import React from 'react';
import styled from 'styled-components';

interface Props {
  views: number;
  name: string;
}

const PostSubHeader = ({ views, name }: Props) => {
  return (
    <Container>
      <Text fontSize={20}>{name}</Text>
      <Section>
        <Text fontSize={14}>조회수 {views}</Text>
      </Section>
    </Container>
  );
};

export default PostSubHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  height: 40px;
  border-bottom: 1px solid #7594dd;
`;

const Text = styled.div<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
`;
