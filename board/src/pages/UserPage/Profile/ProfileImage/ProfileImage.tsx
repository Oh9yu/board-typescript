import React from 'react';
import styled from 'styled-components';

const ProfileImage = ({ img }: any) => {
  return (
    <Container>
      {/* <ImageUpdate /> */}
      <Image src={img === null ? 'images/user.png' : ''} />
    </Container>
  );
};

export default ProfileImage;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 150px;
  border-radius: 100px;
`;
