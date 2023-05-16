import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput/SearchInput';
import SearchBtn from './SearchBtn/SearchBtn';
import PreviewResult from './PreviewResult/PreviewResult';
import { API } from '../../config/config';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (!searchInput) {
      return setData([]);
    } else {
      setData([searchInput]);
    }

    const timeout = setTimeout(() => {
      fetch(`${API.search}/auto?keyword=${searchInput}`)
        .then(res => res.json())
        .then(data => {
          setData((prevData: any) => [
            searchInput,
            ...prevData.slice(1),
            ...data,
          ]);
        });
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  const focusHandler = () => {
    setIsFocus(true);
  };
  const blurHandler = () => {
    setIsFocus(false);
  };

  const searchBtnHandler = () => {
    console.log('click event');
  };

  console.log(data);

  return (
    <Container isfocus={isFocus}>
      <SearchInput
        value={searchInput}
        setSearchInput={setSearchInput}
        focusHandler={focusHandler}
        blurHandler={blurHandler}
      />
      <SearchBtn onClick={searchBtnHandler} />
      {isFocus && <PreviewResult isfocus={isFocus.toString()} data={data} />}
    </Container>
  );
};

export default Search;

const Container = styled.div<{ isfocus: boolean }>`
  display: flex;
  width: ${props => (props.isfocus ? 400 : 200)}px;
  align-items: center;
  margin-left: 10px;
  transition: all 0.1s ease-in-out;
  @media screen and (max-width: 700px) {
    width: 180px;
  }
`;
