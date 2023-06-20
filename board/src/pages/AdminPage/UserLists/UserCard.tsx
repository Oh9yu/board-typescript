import React from 'react';
import { styled } from 'styled-components';

const UserCard = ({ userData }: any) => {
  console.log(userData);

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
      </ProFile>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  width: 100%;
  padding: 5px;
  border-bottom: 2px solid #ddd;
`;

const ProFile = styled.div``;

const ImgBox = styled.div`
  width: 50px;
  height: 50px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 25px;
`;
