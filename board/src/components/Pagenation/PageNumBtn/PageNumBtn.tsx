import React from 'react';
import styled, { useTheme } from 'styled-components';

interface PageNumType {
  value: number;
  page: number;
  setPage: (value: number) => void;
}

const PageNumBtn = ({ value, setPage, page }: PageNumType) => {
  const theme = useTheme();
  const isSelected =
    page === value ? `${theme?.backGroundColor2}` : 'transparent';

  return (
    <Button
      onClick={() => {
        setPage(value);
      }}
      bgc={isSelected}
    >
      {value}
    </Button>
  );
};

export default PageNumBtn;

const Button = styled.button<{ bgc: string }>`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.bgc};
  &:hover {
    background-color: ${props => props.theme.hoverColor1};
  }
`;
