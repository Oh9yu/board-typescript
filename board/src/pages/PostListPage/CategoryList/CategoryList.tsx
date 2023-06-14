import React from 'react';
import styled from 'styled-components';

interface Props {
  categoryName: string;
  name: string;
  subCatId: string;
  statusHandler: (categoryName: string, subCatId: string) => void;
}

const CategoryList = ({
  categoryName,
  name,
  subCatId,
  statusHandler,
}: Props) => {
  const bgc = name === categoryName ? '#5173c2' : 'transparent';
  const color = name === categoryName ? '#eee' : '#111';

  return (
    <List
      bgc={bgc}
      color={color}
      onClick={() => {
        statusHandler(categoryName, subCatId);
      }}
    >
      {categoryName}
    </List>
  );
};

export default CategoryList;

const List = styled.div<{ bgc: string }>`
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
  @media screen and (max-width: 700px) {
    border-radius: 3px;
    margin: 2px;
    width: max-content;
    font-size: 12px;
  }
`;
