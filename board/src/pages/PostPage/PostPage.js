import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config/config';
import getToken from '../../utils/getToken';
import PostContent from './PostContent/PostContent';
import PostHeader from './PostHeader/PostHeader';
import PostLikes from './PostLikes/PostLikes';

const PostPage = ({ postId }) => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const token = getToken();

  useEffect(() => {
    fetch(`${API.post}?postId=${location.state.id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

  return (
    <Container>
      <PostHeader
        title={data.title}
        createdAt={data.createdAt}
        likes={data.likes}
        name={data.name}
        views={data.views}
      />
      <PostContent content={data.contents} />
      <PostLikes token={token} postId={data._id} />
    </Container>
  );
};

export default PostPage;

const Container = styled.div`
  width: 1024px;
  height: 100vh;
  margin: auto;
  padding-top: 100px;
`;
