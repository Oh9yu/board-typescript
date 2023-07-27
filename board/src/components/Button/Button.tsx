import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  name: string;
  fontSize?: number;
  onClick: () => void;
};

const Button = ({ name, onClick, fontSize }: ButtonProps) => {
  return (
    <Btn onClick={onClick} fontSize={fontSize}>
      {name}
    </Btn>
  );
};

export default Button;

const Btn = styled.button<{ fontSize?: number }>`
  padding: ${props => (props.fontSize ? '2px 4px' : '5px 10px')};
  font-size: ${props => (props.fontSize ? props.fontSize : 12)}px;
  margin: 2px;
  width: max-content;
  height: max-content;
  background-color: ${props => props.theme.backGroundColor1};
  color: ${props => props.theme.fontColor};
  border: 2px solid ${props => props.theme.borderColor1};
  border-radius: 3px;
  &:hover {
    background-color: ${props => props.theme.hoverColor1};
  }
  &:active {
    transition: 0.1s;
    border: 2px solid ${props => props.theme.color3};
    background-color: ${props => props.theme.color3};
  }
`;
