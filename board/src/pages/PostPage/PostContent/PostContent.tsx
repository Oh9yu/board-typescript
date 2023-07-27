import React from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';

const PostContent = ({ content }: any) => {
  return (
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

export default PostContent;

const Container = styled.div`
  display: flex;
  padding: 30px;
  min-height: 300px;
`;

const Content = styled.div<{ theme: any }>`
  color: #333;
`;
