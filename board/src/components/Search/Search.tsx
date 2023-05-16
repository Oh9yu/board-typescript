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
  const [keyFocus, setKeyFocus] = useState(0);

  useEffect(() => {
    if (!searchInput) {
      return setData([]);
    } else {
      setKeyFocus(0);
      setData([searchInput]);
    }

    const timeout = setTimeout(() => {
      console.log('fetch Data!');

      fetch(`${API.search}/auto?keyword=${searchInput}`)
        .then(res => res.json())
        .then(data => {
          setData((prevData: any) => [
            searchInput,
            ...prevData.slice(1),
            ...data,
          ]);
        });
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  const focusHandler = () => {
    setIsFocus(true);
  };
  const blurHandler = () => {
    setIsFocus(false);
  };

  const searchHandler = () => {
    console.log('click event');
  };

  const keypressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (keyFocus >= data.length - 1) {
        setKeyFocus(0);
      } else setKeyFocus(keyFocus + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (keyFocus <= 0) {
        setKeyFocus(data.length - 1);
      } else setKeyFocus(keyFocus - 1);
    }
  };

  return (
    <Container isfocus={isFocus}>
      <SearchInput
        value={searchInput}
        setSearchInput={setSearchInput}
        focusHandler={focusHandler}
        blurHandler={blurHandler}
        keypressHandler={keypressHandler}
      />
      <SearchBtn onClick={searchHandler} />
      {isFocus && (
        <PreviewResult isfocus={isFocus} data={data} keyFocus={keyFocus} />
      )}
    </Container>
  );
};

export default Search;

const Container = styled.div<{ isfocus: any }>`
  display: flex;
  width: ${props => (props.isfocus ? 400 : 200)}px;
  align-items: center;
  margin-left: 10px;
  transition: all 0.1s ease-in-out;
  @media screen and (max-width: 700px) {
    width: 180px;
  }
`;
