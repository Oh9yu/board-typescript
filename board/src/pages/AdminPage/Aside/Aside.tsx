import React from 'react';
import styled from 'styled-components';

const AsideList = [{ name: 'UserList' }, { name: 'Category' }];

interface Props {
  page: string;
  asideClick: (pageName: string) => void;
}

const Aside = ({ page, asideClick }: Props) => {
  return (
    <Container>
      {AsideList.map(d => {
        return (
          <ListBox
            bgc={page === d.name ? '#9ab2eb' : '#fff'}
            key={d.name}
            onClick={() => {
              asideClick(d.name);
            }}
          >
            {d.name}
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
  @media screen and (max-width: 1024px) {
    margin: auto;
    flex-direction: row;
    width: 100%;
    min-height: max-content;
  }
`;

const ListBox = styled.div<{ bgc: string }>`
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
  @media screen and (max-width: 1024px) {
    margin: 5px;
  }
`;
