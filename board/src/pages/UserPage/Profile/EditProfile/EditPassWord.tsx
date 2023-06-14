import React, { useState } from 'react';
import { styled } from 'styled-components';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

const EditPassWord = () => {
  const [inputValue, setInputValue] = useState({ pw: '', newPw: '' });
  const [inputType, setinputType] = useState('password');

  const visibleHandler = () => {
    if (inputType === 'password') {
      setinputType('text');
    } else setinputType('password');
  };

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <EditForm>
      <HeaderWrap>
        비밀번호 변경
        <VisibleBtn onClick={visibleHandler}>
          {inputType === 'password' ? <AiFillEyeInvisible /> : <AiFillEye />}
        </VisibleBtn>
      </HeaderWrap>

      <Wrap>
        <Input
          value={inputValue.pw}
          name="pw"
          onChange={inputHandler}
          type={inputType}
          placeholder="현재 비밀번호"
        />
      </Wrap>
      <Wrap>
        <Input
          value={inputValue.newPw}
          name="newPw"
          onChange={inputHandler}
          type={inputType}
          placeholder="변경 비밀번호"
        />
      </Wrap>
    </EditForm>
  );
};

export default EditPassWord;

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-top: 1px solid #ccc;
`;

const HeaderWrap = styled.div`
  position: relative;
  user-select: none;
`;

const VisibleBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: -30px;
  position: absolute;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Wrap = styled.div`
  margin-top: 4px;
  width: 240px;
  @media screen and (max-width: 700px) {
    width: 200px;
  }
`;

const Input = styled.input`
  padding-left: 5px;
  width: 100%;
  height: 36px;
  font-size: 12px;
  border: 2px solid #7594dd;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 700px) {
    height: 30px;
  }
`;
