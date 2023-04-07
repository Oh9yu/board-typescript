import React from 'react';
import styled from 'styled-components';

const PostContent = ({ content }) => {
  return (
    <Container>
      <Content>{content}</Content>
    </Container>
  );
};

export default PostContent;

const Container = styled.div`
  display: flex;
  padding: 30px;
  min-height: 300px;
`;

const Content = styled.p``;
