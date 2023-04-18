import React from 'react';
import styled from 'styled-components';

const Button = ({ name, onClick }) => {
  return <Btn onClick={onClick}>{name}</Btn>;
};

export default Button;

const Btn = styled.button`
  padding: 5px 10px;
  width: max-content;
  height: max-content;
  background-color: #fff;
  border: 2px solid #9ab2eb;
  border-radius: 3px;
  &:hover {
    background-color: #9ab2eb;
  }
  &:active {
    transition: 0.1s;
    border: 2px solid #738cd3;
    background-color: #738cd3;
  }
`;
