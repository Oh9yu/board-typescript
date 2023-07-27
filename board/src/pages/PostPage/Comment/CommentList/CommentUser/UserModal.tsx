import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  accountId: string;
}

const UserModal = ({ accountId }: Props) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate('/userpage', { state: { accountId: accountId } });
      }}
    >
      유저 정보보기
    </Container>
  );
};

export default UserModal;

const Container = styled.div<{ theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 90px;
  height: 24px;
  left: 50px;
  top: 30px;
  padding: 2px 10px;
  font-size: 12px;
  background-color: #fff;
  border: 1px solid ${props => props.theme.color2};
  border-radius: 3px;
  cursor: pointer;
`;
