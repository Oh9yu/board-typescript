import React from 'react';
import styled from 'styled-components';

const SearchBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <ButtonImg src="/images/searchBtn.png" />
    </Button>
  );
};

export default SearchBtn;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #7594dd;
`;

const ButtonImg = styled.img`
  height: 25px;
`;
