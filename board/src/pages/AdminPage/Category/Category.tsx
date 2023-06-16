import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateMainCategory from './CategoryFuctions/CreateMainCategory';
import CreateSubCategory from './CategoryFuctions/CreateSubCategory';
import EditMainCategory from './CategoryFuctions/EditMainCategory';
import { API } from '../../../config/config';
import DeleteMainCategory from './CategoryFuctions/DeleteMainCategory';
import EditSubCategory from './CategoryFuctions/EditSubCategory';
import DeleteSubCategory from './CategoryFuctions/DeleteSubCategory';

interface Props {
  setPage: (arg: string) => void;
}

const Category = ({ setPage }: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API.category}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const successHandler = () => {
    setPage('');
  };

  return (
    <Container>
      <Section>
        <CreateMainCategory onSuccess={successHandler} />
        <EditMainCategory data={data} onSuccess={successHandler} />
        <DeleteMainCategory data={data} onSuccess={successHandler} />
      </Section>
      <Section>
        <CreateSubCategory data={data} onSuccess={successHandler} />
        <EditSubCategory data={data} onSuccess={successHandler} />
        <DeleteSubCategory data={data} onSuccess={successHandler} />
      </Section>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 20px;
  margin: auto;
  min-height: 600px;
  width: 800px;
  border: 2px solid #738cd3;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin: 5px;
  @media screen and (max-width: 1024px) {
    width: 240px;
  }
`;
