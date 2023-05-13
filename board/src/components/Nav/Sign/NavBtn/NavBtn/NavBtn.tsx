import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  btnName: string;
  width: number;
  height: number;
  fontSize: number;
  borderColor: string;
  hoverColor: string;
  onClick: () => void;
}

const NavBtn = ({
  width,
  height,
  fontSize,
  borderColor,
  hoverColor,
  btnName,
  onClick,
}: ButtonProps) => {
  return (
    <Container
      width={width}
      height={height}
      fontSize={fontSize}
      borderColor={borderColor}
      hoverColor={hoverColor}
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
  border: 2px solid ${props => props.borderColor};
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    background-color: ${props => props.borderColor};
    transition: 0.2s;
  }
`;
