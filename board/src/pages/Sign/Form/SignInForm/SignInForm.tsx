import React, { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

type InputValue = {
  email: string;
  password: string;
};

type Props = {
  inputValue: InputValue;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  signHandler: () => void;
};

const SignInForm = ({ inputValue, onChangeInput, signHandler }: Props) => {
  const keypress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      signHandler();
    }
  };

  return (
    <Form>
      <Input
        type="text"
        placeholder="ID"
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
        onKeyDown={keypress}
      />
    </Form>
  );
};

export default SignInForm;

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
