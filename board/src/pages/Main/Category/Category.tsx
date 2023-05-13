import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CategoryList from './CategoryList';

type CategoryType = {
  mainCatName: string;
  mainCatId: string;
};

const Category = () => {
  const [category, setCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
    fetch(`${API.category}`)
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  return (
    <Container>
      {category?.map(data => {
        return (
          <CategoryList
            name={data.mainCatName}
            mainCatId={data.mainCatId}
            key={data.mainCatName}
          />
        );
      })}
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 10px;
  width: 100%;
  height: max-content;
  background-color: #9ab2eb;
  border-bottom: 2px solid #7594dd;
`;
