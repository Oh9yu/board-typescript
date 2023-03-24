import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/SideBar/SideBar';

const category = [{ name: 'Profile' }, { name: 'Post' }];

const UserPage = () => {
  return (
    <Container>
      {/* <SideBar type="MyPage" category={category} />
      <Div>z</Div> */}
    </Container>
  );
};

export default UserPage;

const Container = styled.div`
  display: flex;
  width: 800px;
  height: 300px;
  margin: 50px auto;
  background-color: #f9fafc;
  border-radius: 8px;
  box-shadow: 0 0 5px #f1f4f7;
`;
const Div = styled.div`
  width: 800px;
`;
