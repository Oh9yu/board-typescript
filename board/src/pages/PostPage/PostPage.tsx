import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config/config';
import getToken from '../../utils/getToken';
import PostContent from './PostContent/PostContent';
import PostHeader from './PostHeader/PostHeader';
import PostLikes from './PostLikes/PostLikes';
import Comment from './Comment/Comment';
import PostEdit from './PostEdit/PostEdit';

interface DataType {
  post: PostType;
  author: AuthorType;
  user: UserType;
}

interface PostType {
  subCatId: string;
  title: string;
  contents: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  postId: string;
  likes: number;
  usersWhoLiked: string[];
}

interface AuthorType {
  name: string;
  email: string;
  profileImage: string;
  descriptions: string;
  authorId: string;
}

interface UserType {
  likeStatus: boolean;
  deleteAllowed: boolean;
  modifyAllowed: boolean;
}

const PostPage = () => {
  const [data, setData] = useState<DataType>();
  const location = useLocation();
  const token = getToken('TOKEN') || '';
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API.post}?postId=${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, [id]);
  return (
    <Container>
      {data && (
        <PostHeader
          title={data.post.title}
          createdAt={data.post.createdAt}
          name={data.author.name}
          views={data.post.views}
        />
      )}
      {data?.user.modifyAllowed && (
        <PostEdit
          title={data.post.title}
          contents={data.post.contents}
          postId={id || ''}
        />
      )}
      <PostContent content={data?.post.contents} />
      {data && (
        <PostLikes
          postId={id || ''}
          likes={data.post.likes}
          likeStatus={data.user.likeStatus}
          usersWhoLiked={data.post.usersWhoLiked}
        />
      )}
      <Comment />
    </Container>
  );
};

export default PostPage;

const Container = styled.div`
  position: relative;
  max-width: 1024px;
  height: 100vh;
  margin: auto;
  padding-top: 100px;
`;
