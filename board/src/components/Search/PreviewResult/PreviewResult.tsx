import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import ResultList from './ResultList';

interface Props {
  isfocus: any;
  data: any[] | undefined;
}
const PreviewResult = ({ isfocus, data }: Props) => {
  const [height, setHeight] = useState(0);
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    const displayTime = setTimeout(() => {
      setDisplay('block');
    }, 200);

    const heightTime = setTimeout(() => {
      setHeight(6);
    }, 300);

    return () => {
      clearTimeout(displayTime);
      clearTimeout(heightTime);
    };
  }, [isfocus]);

  return (
    <Container height={height} display={display}>
      {height > 0 &&
        data &&
        data.map((data, idx) => {
          return <ResultList key={idx} title={data} />;
        })}
    </Container>
  );
};

export default PreviewResult;

const Container = styled.div<{ height: number; display: string }>`
  position: absolute;
  display: ${({ display }) => `${display}`};
  top: 40px;
  width: 367px;
  min-height: ${({ height }) => `${height}px`};
  background-color: #fff;
  border-left: 2px solid #7594dd;
  border-right: 2px solid #7594dd;
  border-bottom: 2px solid #7594dd;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 1;
  transition: 0.1s ease-in-out;

  @media screen and (max-width: 700px) {
    top: 36px;
    width: 154px;
  }
`;
