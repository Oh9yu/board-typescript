import React from 'react';
import styled from 'styled-components';

const AsideList = [{ name: 'UserList' }, { name: 'Category' }];

const Aside = ({ page, setPage }) => {
  return (
    <Container>
      {AsideList.map(e => {
        return (
          <ListBox
            bgc={page === e.name ? '#9ab2eb' : '#fff'}
            key={e.name}
            onClick={() => {
              setPage(e.name);
            }}
          >
            {e.name}
          </ListBox>
        );
      })}
    </Container>
  );
};

export default Aside;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  min-height: 600px;
  padding: 5px;
  background-color: #fff;
  border: 2px solid #738cd3;
`;

const ListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 35px;
  margin-top: 5px;
  border: solid 2px #9ab2eb;
  border-radius: 5px;
  background-color: ${props => props.bgc};
  cursor: pointer;
  &:hover {
    background-color: #9ab2eb;
  }
`;
