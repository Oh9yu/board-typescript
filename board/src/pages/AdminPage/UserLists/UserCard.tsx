import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { API } from '../../../config/config';
import getToken from '../../../utils/getToken';

const UserCard = ({ userData, setPage }: any) => {
  const navigate = useNavigate();
  const token = getToken('TOKEN') || '';

  const userInfoHandler = () => {
    navigate('/userpage', { state: { accountId: userData._id } });
  };

  const statusHandler = () => {
    const promptData = window.prompt('Admin Password 입력');
    if (!promptData) return;

    fetch(`${API.admin}/userAccount/access`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({
        adminPassword: promptData,
        userId: userData._id,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'Passed in wrong password') {
          alert('비밀번호를 확인해주세요');
        } else {
          alert('변경했습니다');
          setPage('');
        }
      });
  };

  return (
    <Container>
      <ProFile>
        <ImgBox>
          <Img
            src={
              userData.profileImage ? userData.profileImage : 'images/user.png'
            }
          />
        </ImgBox>
        <Information>
          <Text onClick={userInfoHandler}>{userData.name}</Text>
          <Text>{userData.email}</Text>
        </Information>
      </ProFile>
      <UserBlock>
        <UserStatus color={userData.isBlocked ? '#ff0000' : '#008000'}>
          {userData.isBlocked ? '계정사용 불가능' : '계정사용 가능'}
        </UserStatus>
        <Blockbtn onClick={statusHandler}>계정 상태 변경</Blockbtn>
      </UserBlock>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-bottom: 2px solid #ddd;
`;

const ProFile = styled.div`
  display: flex;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 50px;
  height: 50px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 25px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  width: max-content;
  margin: 2px 5px;
  padding: 2px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #ddd;
  }
`;

const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserStatus = styled.div<{ color: string }>`
  padding: 4px;
  font-size: 12px;
  color: ${props => props.color};
  border: 2px solid ${props => props.color};
  border-radius: 4px;
`;

const Blockbtn = styled.button`
  margin: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background-color: #fff;
  border: 2px solid #bbb;
  border-radius: 5px;
  &:hover {
    background-color: #ddd;
  }
`;
