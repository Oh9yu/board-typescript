import React from 'react';
import styled from 'styled-components';

const SearchInput = ({ value, setSearchInput }) => {
  const searchInputHandler = e => {
    setSearchInput(e.target.value);
  };

  return <Input type="text" value={value} onChange={searchInputHandler} />;
};

export default SearchInput;

const Input = styled.input`
  padding-left: 5px;
  height: 36px;
  font-size: 16px;
  border: 2px solid #7594dd;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &:focus {
    outline: none;
  }
`;
