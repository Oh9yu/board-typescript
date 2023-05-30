import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput/SearchInput';
import SearchBtn from './SearchBtn/SearchBtn';
import PreviewResult from './PreviewResult/PreviewResult';
import { API } from '../../config/config';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [data, setData] = useState<any>([]);
  const [keyFocus, setKeyFocus] = useState(0);

  const focusHandler = () => {
    setIsFocus(true);
  };
  const blurHandler = () => {
    setIsFocus(false);
  };

  const searchHandler = () => {
    if (searchInput.length > 3) return;
    navigate(`/result/${searchInput}`);
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
    } else if (e.key === 'Enter') {
      navigate(`/result/${data[keyFocus]}`);
      setSearchInput('');
    }
  };

  useEffect(() => {
    if (!searchInput) {
      return setData([]);
    } else {
      setKeyFocus(0);
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
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  return (
    <Container isfocus={isFocus.toString()}>
      <SearchInput
        value={searchInput}
        setSearchInput={setSearchInput}
        focusHandler={focusHandler}
        blurHandler={blurHandler}
        keypressHandler={keypressHandler}
      />
      <SearchBtn onClick={searchHandler} />
      {isFocus && <PreviewResult isfocus data={data} keyFocus={keyFocus} />}
    </Container>
  );
};

export default Search;

const Container = styled.div<{ isfocus: string }>`
  display: flex;
  width: ${props => (props.isfocus === 'true' ? 400 : 200)}px;
  align-items: center;
  margin-left: 10px;
  transition: all 0.1s ease-in-out;
  @media screen and (max-width: 700px) {
    width: 180px;
  }
`;
