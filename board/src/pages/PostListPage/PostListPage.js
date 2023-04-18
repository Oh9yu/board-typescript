import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PostCategory from './PostCategory/PostCategory';
import PostSection from './PostSection/PostSection';

const PostListPage = () => {
  const location = useLocation();
  const [status, setStatus] = useState({
    name: `${location.state.categoryName}`,
    id: `${location.state.subCatId}`,
  });

  const statusHandler = (name, id) => {
    setStatus({ ...status, name: name, id: id });
  };

  return (
    <Container>
      <Title>{location.state.categoryName}</Title>
      <PostCategory
        postId={location.state.postId}
        status={status.name}
        statusHandler={statusHandler}
      />
      <PostSection status={status.id} />
    </Container>
  );
};

export default PostListPage;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;
  width: 1024px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 36px;
  color: #333;
`;
