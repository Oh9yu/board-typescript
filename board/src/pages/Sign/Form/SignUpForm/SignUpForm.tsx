import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type InputValue = {
  name: string;
  email: string;
  password: string;
};

type Props = {
  inputValue: InputValue;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SignUpForm = ({ inputValue, onChangeInput }: Props) => {
  return (
    <Form>
      <Input
        type="text"
        placeholder="Name"
        value={inputValue.name}
        name="name"
        onChange={onChangeInput}
      />
      <Input
        type="text"
        placeholder="Email"
        value={inputValue.email}
        name="email"
        onChange={onChangeInput}
      />
      <Input
        type="password"
        placeholder="PassWord"
        value={inputValue.password}
        name="password"
        onChange={onChangeInput}
      />
    </Form>
  );
};

export default SignUpForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 3px;
  padding: 5px;
  width: 200px;
  height: 30px;
  border: 2px solid #c9d9f9;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #7594dd;
  }
`;
