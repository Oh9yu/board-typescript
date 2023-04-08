import React from 'react';
import styled from 'styled-components';

const PostSubHeader = ({ likes, views, name }) => {
  return (
    <Container>
      <Text fontsize={20}>{name}</Text>
      <Section>
        <Text fontsize={14}>조회수 {views}</Text>
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

const Text = styled.div`
  font-size: ${props => props.fontsize}px;
  color: ${props => props.color};
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
`;
