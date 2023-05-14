import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  btnName: string;
  width: number;
  height: number;
  fontSize: number;
  onClick: () => void;
}

const NavBtn = ({ width, height, fontSize, btnName, onClick }: ButtonProps) => {
  return (
    <Container
      width={width}
      height={height}
      fontSize={fontSize}
      onClick={onClick}
    >
      {btnName}
    </Container>
  );
};

export default NavBtn;

const Container = styled.button<Omit<ButtonProps, 'btnName'>>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: 5px;
  font-size: ${props => props.fontSize}px;
  background-color: transparent;
  border: 2px solid #7594dd;
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    background-color: #5173c2;
    transition: 0.2s;
  }

  @media screen and (min-width: 200px) and (max-width: 600px) {
    width: max-content;
    height: max-content;
    padding: 6px;
    font-size: 12px;
  }
`;
