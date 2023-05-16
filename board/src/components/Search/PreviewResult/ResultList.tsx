import React from 'react';
import { styled } from 'styled-components';

interface Props {
  title: string[];
}

const ResultList = ({ title }: any) => {
  return <Post>{title}</Post>;
};

export default ResultList;

const Post = styled.div`
  margin: 5px;
  font-size: 14px;
  width: 340px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  @media screen and (max-width: 700px) {
    font-size: 12px;
    width: 140px;
  }
`;
