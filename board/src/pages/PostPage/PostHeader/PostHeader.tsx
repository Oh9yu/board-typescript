import React from 'react';
import styled from 'styled-components';
import useCreatedAt from '../../../utils/hook/useCreatedAt';
import PostSubHeader from './PostSubHeader/PostSubHeader';

interface Props {
  title: string;
  createdAt: string;
  name: string;
  views: number;
}

const PostHeader = ({ title, createdAt, name, views }: Props) => {
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
      <PostSubHeader name={name} views={views} />
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

const Text = styled.div<{ fontsize: number }>`
  font-size: ${props => props.fontsize}px;
  color: ${props => props.color};
`;
