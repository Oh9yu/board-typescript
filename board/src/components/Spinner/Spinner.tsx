import React from 'react';
import { styled } from 'styled-components';
import { BeatLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <Container>
      <BeatLoader color="#3684d6" />
    </Container>
  );
};

export default Spinner;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
