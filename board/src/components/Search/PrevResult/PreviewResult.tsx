import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

interface Props {
  isfocus: any;
}

const PreviewResult = ({ isfocus }: Props) => {
  const [height, setHeight] = useState(0);
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    const displayTime = setTimeout(() => {
      setDisplay('block');
    }, 200);

    const heightTime = setTimeout(() => {
      setHeight(12);
    }, 300);

    return () => {
      clearTimeout(displayTime);
      clearTimeout(heightTime);
    };
  }, [isfocus]);

  return <Container height={height} display={display}></Container>;
};

export default PreviewResult;

const Container = styled.div<{ height: number; display: string }>`
  position: absolute;
  display: ${({ display }) => `${display}`};
  top: 40px;
  width: 400px;
  height: ${({ height }) => `${height}px`};
  background-color: #fff;
  border-left: 2px solid #7594dd;
  border-right: 2px solid #7594dd;
  border-bottom: 2px solid #7594dd;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 1;
  transition: 0.1s;

  @media screen and (max-width: 600px) {
    top: 36px;
    width: 180px;
  }
`;
