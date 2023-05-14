import React from 'react';
import styled from 'styled-components';

const Delete = ({ value, onChangeHandler, onClick }: any) => {
  return (
    <>
      <Input type="password" value={value} onChange={onChangeHandler} />
      <Input type="button" value="submit" onClick={onClick} />
    </>
  );
};

export default Delete;

const Input = styled.input``;
