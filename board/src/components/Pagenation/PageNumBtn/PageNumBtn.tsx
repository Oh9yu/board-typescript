import React from 'react';
import styled from 'styled-components';

interface PageNumType {
  value: number;
  page: number;
  setPage: (value: number) => void;
}

const PageNumBtn = ({ value, setPage, page }: PageNumType) => {
  const isSelected = page === value ? '#9ab2eb' : 'transparent';

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
  background-color: ${props => props.bgc};
  &:hover {
    background-color: #eee;
  }
`;
