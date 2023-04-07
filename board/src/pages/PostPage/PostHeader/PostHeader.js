import React from 'react';
import styled from 'styled-components';
import useCreatedAt from '../../../utils/hook/useCreatedAt';
import PostSubHeader from './PostSubHeader/PostSubHeader';

const PostHeader = ({ title, createdAt, name, likes, views }) => {
  const postTime = useCreatedAt(createdAt);

  return (
    <>
      <Header>
        <Text fontsize={20} color="#333">
          {title}
        </Text>
        <Text fontsize={16} color="#777">
          {postTime}
        </Text>
      </Header>
      <PostSubHeader name={name} likes={likes} views={views} />
    </>
  );
};

export default PostHeader;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
  background-color: #c9d9f9;
  border-top: 2px solid #7594dd;
  border-bottom: 2px solid #7594dd;
`;

const Text = styled.div`
  font-size: ${props => props.fontsize}px;
  color: ${props => props.color};
`;
