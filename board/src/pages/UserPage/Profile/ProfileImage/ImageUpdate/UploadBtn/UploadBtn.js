import React from 'react';
import styled from 'styled-components';

const UploadBtn = () => {
  return (
    <>
      <Button htmlFor="profileImg">+</Button>
      <Input type="file" id="profileImg" />
    </>
  );
};

export default UploadBtn;

const Button = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 30px;
  font-size: 25px;
  background-color: #c9d9f9;
  border: 2px solid #5173c2;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    transition: 0.2s;
  }
`;

const Input = styled.input`
  display: none;
`;
