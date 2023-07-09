import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  name: string;
  fontsize?: number;
  onClick: () => void;
};

const Button = ({ name, onClick, fontsize }: ButtonProps) => {
  return (
    <Btn onClick={onClick} fontsize={fontsize}>
      {name}
    </Btn>
  );
};

export default Button;

const Btn = styled.button<{ fontsize?: number }>`
  padding: 5px 10px;
  font-size: ${props => (props.fontsize ? props.fontsize : 12)}px;
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
