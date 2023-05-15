import React from 'react';
import styled from 'styled-components';

const SearchBtn = ({ onClick }: any) => {
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
  width: 36px;
  height: 36px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #7594dd;
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
`;
const ButtonImg = styled.img`
  height: 25px;
  @media screen and (max-width: 600px) {
    height: 20px;
  }
`;
