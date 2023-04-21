import React from 'react';
import styled from 'styled-components';
import LikesCountPosts from './LikesCountPosts/LikesCountPosts';
import ViewCountPosts from './ViewsCountPosts/ViewCountPosts';

const HotPostSection = () => {
  return (
    <Container>
      <LikesCountPosts />
      <ViewCountPosts />
    </Container>
  );
};

export default HotPostSection;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1024px;
  height: 200px;
  margin-top: 20px;
`;
