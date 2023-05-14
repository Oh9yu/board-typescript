import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type Props = {
  value: any;
  setSearchInput: Dispatch<SetStateAction<string>>;
};

const SearchInput = ({ value, setSearchInput }: Props) => {
  const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
  @media screen and (max-width: 600px) {
    max-width: 100px;
    height: 30px;
    font-size: 12px;
  }
`;
