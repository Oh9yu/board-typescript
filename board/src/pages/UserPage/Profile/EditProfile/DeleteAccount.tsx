import React, { useState } from 'react';
import { styled } from 'styled-components';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';
import { useNavigate } from 'react-router-dom';

const DeleteAccount = () => {
  const [inputValue, setInputValue] = useState('');
  const token = getToken('TOKEN') || '';
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const deleteHandler = () => {
    if (!inputValue) return;
    if (window.confirm('회원 탈퇴 하시겠습니까')) {
      fetch(`${API.signup}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify({
          password: inputValue,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'Successfully deleted the account') {
            localStorage.removeItem('TOKEN');
            alert('회원탈퇴 되었습니다!');
            navigate('/');
          } else if (res.message === 'Passed in wrong password') {
            alert('비밀번호를 확인해주세요');
          }
        });
    }
  };

  return (
    <Container>
      회원탈퇴
      <Wrap>
        <Input type="password" value={inputValue} onChange={changeHandler} />
        <DeleteAccountBtn onClick={deleteHandler}>회원 탈퇴</DeleteAccountBtn>
      </Wrap>
    </Container>
  );
};

export default DeleteAccount;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #ccc;
  padding-top: 8px;
`;

const Wrap = styled.div`
  display: flex;
  margin-top: 4px;
`;

const Input = styled.input`
  padding-left: 5px;
  margin-right: 4px;
  height: 36px;
  font-size: 12px;
  border: 2px solid #ff8282;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 700px) {
    height: 30px;
  }
`;

const DeleteAccountBtn = styled.button`
  padding: 4px 5px;
  border-radius: 5px;
  border: none;
  width: max-content;
  border: 1px solid #ff5a5a;
  background-color: #ff8282;
  &:hover {
    background-color: #ff5a5a;
  }
`;
