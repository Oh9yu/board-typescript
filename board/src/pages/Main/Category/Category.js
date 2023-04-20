import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CategoryList from './CategoryList/CategoryList';

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`${API.category}`)
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  return (
    <Container>
      {category?.map(e => {
        return (
          <CategoryList
            name={e.mainCatName}
            mainCatId={e.mainCatId}
            key={e.mainCatName}
          />
        );
      })}
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  height: max-content;
  background-color: #9ab2eb;
  border-bottom: 2px solid #7594dd;
`;
