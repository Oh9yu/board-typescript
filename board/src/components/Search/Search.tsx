import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput/SearchInput';
import SearchBtn from './SearchBtn/SearchBtn';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');

  const searchBtnHandler = () => {
    console.log('click event');
  };
  return (
    <Container>
      <SearchInput value={searchInput} setSearchInput={setSearchInput} />
      <SearchBtn onClick={searchBtnHandler} />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
