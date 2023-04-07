import React from 'react';
import styled from 'styled-components';

const CategoryList = ({ categoryName, status, statusHandler }) => {
  const bgc = status === categoryName ? '#5173c2' : 'transparent';
  const color = status === categoryName ? '#eee' : '#111';

  return (
    <List
      bgc={bgc}
      color={color}
      onClick={() => {
        statusHandler(categoryName);
      }}
    >
      {categoryName}
    </List>
  );
};

export default CategoryList;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  background-color: ${props => props.bgc};
  color: ${props => props.color};
  cursor: pointer;
  &:hover {
    background-color: #7594dd;
    transition: 0.1s;
  }
`;
