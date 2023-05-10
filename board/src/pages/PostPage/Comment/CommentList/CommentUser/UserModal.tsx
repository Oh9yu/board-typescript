import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UserModal = () => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate('/userpage');
      }}
    >
      유저 정보보기
    </Container>
  );
};

export default UserModal;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 90px;
  height: 24px;
  padding: 2px 10px;
  font-size: 12px;
  background-color: #fff;
  border: 1px solid #c9d9f9;
  border-radius: 3px;
  cursor: pointer;
`;
