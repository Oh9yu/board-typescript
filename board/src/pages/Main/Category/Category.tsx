import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CategoryList from './CategoryList';
import getFetch from '../../../utils/dataFetch/getFetch';

type CategoryType = {
  mainCatName: string;
  mainCatId: string;
};

const Category = () => {
  const { data, isLoading } = useQuery<CategoryType[]>(
    ['mainCategory'],
    () => {
      return getFetch(`${API.category}`);
    },
    {
      cacheTime: Infinity,
      enabled: !!Category,
    }
  );

  if (isLoading) return <div>loading</div>;

  return (
    <Container>
      {data?.map(data => {
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
  @media screen and (max-width: 600px) {
    padding: 4px 5px;
  }
`;
