import React from 'react';
import styled from 'styled-components';
import UploadBtn from './UploadBtn/UploadBtn';

const ImageUpdate = () => {
  return (
    <Container>
      <UploadBtn />
    </Container>
  );
};

export default ImageUpdate;

const Container = styled.div`
  position: absolute;
  top: 110px;
  right: 30px;
  width: 70px;
  border-radius: 5px;
`;
