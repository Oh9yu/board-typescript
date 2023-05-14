import React from 'react';
import styled from 'styled-components';

const ProfileForm = ({ value, onChangeHandler, onClick }: any) => {
  console.log(value);
  return (
    <>
      <Input
        type="password"
        value={value.pw}
        name="pw"
        onChange={onChangeHandler}
      />
      <Input
        type="password"
        value={value.newPw}
        name="newPw"
        onChange={onChangeHandler}
      />
      <Input type="button" value="submit" onClick={onClick} />
    </>
  );
};

export default ProfileForm;

const Input = styled.input``;
