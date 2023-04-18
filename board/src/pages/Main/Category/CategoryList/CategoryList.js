import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CategoryList = ({ id, name }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/postlist', {
      state: { postId: id, categoryName: name, sub: '' },
    });
  };

  return <List onClick={clickHandler}>{name}</List>;
};

export default CategoryList;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #738cd3;
    transition: 0.2s;
  }
`;
