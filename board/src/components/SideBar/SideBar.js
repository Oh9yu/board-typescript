import React, { useState } from 'react';
import styled from 'styled-components';

const SideBar = ({ type, category }) => {
  console.log(category);
  const [categoryStatus, setCategoryStatus] = useState();

  const categoryCheck = () => {};
  return (
    <Container>
      <Title>{type}</Title>
      <CategorySection>
        {category.map(category => {
          return (
            <CategoryList key={category.name} onClick={categoryCheck}>
              {category.name}
            </CategoryList>
          );
        })}
      </CategorySection>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  margin: 10px;
  padding: 30px 10px;
  width: 200px;
  border: 2px solid #7594dd;
  border-radius: 6px;
  box-shadow: 0 0 2px #7594dd;
`;

const Title = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
`;

const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryList = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;
  margin-bottom: 2px;
  background-color: #ddd;
`;
