import React from 'react';
import styled, { useTheme } from 'styled-components';

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
  const theme = useTheme();
  const bgc = name === categoryName ? `${theme?.color5}` : 'transparent';

  return (
    <List
      bgc={bgc}
      onClick={() => {
        statusHandler(categoryName, subCatId);
      }}
    >
      {categoryName}
    </List>
  );
};

export default CategoryList;

const List = styled.div<{ bgc: string; theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  background-color: ${props => props.bgc};
  color: ${props => props.theme.fontColor};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.color4};
    transition: 0.1s;
  }
  @media screen and (max-width: 700px) {
    border-radius: 3px;
    margin: 2px;
    width: max-content;
    font-size: 12px;
  }
`;
