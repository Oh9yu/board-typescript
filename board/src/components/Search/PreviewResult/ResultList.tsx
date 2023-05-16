import React from 'react';
import { styled } from 'styled-components';

interface Props {
  title: string[];
}

const ResultList = ({ title, keyFocus }: any) => {
  return <Post keyfocus={keyFocus}>{title}</Post>;
};

export default ResultList;

const Post = styled.div<{ keyfocus: boolean }>`
  margin: 5px;
  font-size: 14px;
  width: 340px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${({ keyfocus }) => {
    return keyfocus ? '#ddd' : '#fff';
  }};
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  @media screen and (max-width: 700px) {
    font-size: 12px;
    width: 140px;
  }
`;
