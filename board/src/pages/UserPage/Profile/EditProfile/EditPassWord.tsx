import React, { useState } from 'react';
import { styled } from 'styled-components';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';

interface Props {
  modalHandler: () => void;
}

const EditPassWord = ({ modalHandler }: Props) => {
  const [inputValue, setInputValue] = useState({ pw: '', newPw: '' });
  const [inputType, setinputType] = useState('password');
  const token = getToken('TOKEN') || '';

  const visibleHandler = () => {
    if (inputType === 'password') {
      setinputType('text');
    } else setinputType('password');
  };

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const submitHandler = () => {
    fetch(`${API.updatePW}`, {
      method: 'PATCH',
      headers: { Authorization: token, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: inputValue.pw,
        newPassword: inputValue.newPw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'Successfully updated the password!') {
          alert('비밀번호르 변경했습니다');
          modalHandler();
        } else if (res.message === 'Passed in wrong password') {
          alert('비밀번호를 확인해주세요');
        }
      });
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
      <SubmitBtn onClick={submitHandler}>비밀번호 변경</SubmitBtn>
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
  @media screen and (max-width: 800px) {
    width: 200px;
  }
`;

const Input = styled.input<{ theme: any }>`
  padding-left: 5px;
  width: 100%;
  height: 36px;
  font-size: 12px;
  border: 2px solid ${props => props.theme.color3};
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 800px) {
    height: 30px;
  }
`;

const SubmitBtn = styled.button<{ theme: any }>`
  margin-top: 8px;
  padding: 4px 5px;
  border-radius: 5px;
  border: none;
  border: 1px solid ${props => props.theme.color3};
  background-color: ${props => props.theme.color1};
  &:hover {
    background-color: ${props => props.theme.color3};
  }
`;
