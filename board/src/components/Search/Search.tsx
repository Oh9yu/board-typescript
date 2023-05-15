import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput/SearchInput';
import SearchBtn from './SearchBtn/SearchBtn';
import PreviewResult from './PrevResult/PreviewResult';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = () => {
    setIsFocus(true);
  };
  const blurHandler = () => {
    setIsFocus(false);
  };

  const searchBtnHandler = () => {
    console.log('click event');
  };

  return (
    <Container isfocus={isFocus}>
      <SearchInput
        value={searchInput}
        setSearchInput={setSearchInput}
        focusHandler={focusHandler}
        blurHandler={blurHandler}
      />
      <SearchBtn onClick={searchBtnHandler} />
      {isFocus && <PreviewResult isfocus={isFocus.toString()} />}
    </Container>
  );
};

export default Search;

const Container = styled.div<{ isfocus: boolean }>`
  display: flex;
  width: ${props => (props.isfocus ? 400 : 200)}px;
  align-items: center;
  margin-left: 10px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 600px) {
    width: 180px;
  }
`;
