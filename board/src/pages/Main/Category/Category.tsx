import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CategoryList from './CategoryList';
import getFetch from '../../../utils/dataFetch/getFetch';
import Spinner from '../../../components/Spinner/Spinner';

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
      staleTime: 50000,
    }
  );

  if (isLoading) return <Spinner />;

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

const Container = styled.div<{ theme: any }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 10px;
  width: 100%;
  height: max-content;
  background-color: ${props => props.theme.color3};
  @media screen and (max-width: 600px) {
    padding: 4px 5px;
  }
`;
