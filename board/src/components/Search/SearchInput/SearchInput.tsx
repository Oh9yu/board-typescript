import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type Props = {
  value: any;
  setSearchInput: Dispatch<SetStateAction<string>>;
  focusHandler: () => void;
  blurHandler: () => void;
  keypressHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void;
};

const SearchInput = ({
  value,
  setSearchInput,
  focusHandler,
  blurHandler,
  keypressHandler,
}: Props) => {
  const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={searchInputHandler}
      onFocus={focusHandler}
      onBlur={blurHandler}
      onKeyDown={keypressHandler}
    />
  );
};

export default SearchInput;

const Input = styled.input`
  padding-left: 5px;
  height: 36px;
  font-size: 12px;
  border: 2px solid #7594dd;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 100%;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 700px) {
    height: 30px;
  }
`;
