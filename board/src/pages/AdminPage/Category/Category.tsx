import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateMainCategory from './CategoryFuctions/CreateMainCategory';
import CreateSubCategory from './CategoryFuctions/CreateSubCategory';
import EditMainCategory from './CategoryFuctions/EditMainCategory';
import { API } from '../../../config/config';
import DeleteMainCategory from './CategoryFuctions/DeleteMainCategory';
import EditSubCategory from './CategoryFuctions/EditSubCategory';
import DeleteSubCategory from './CategoryFuctions/DeleteSubCategory';
import getToken from '../../../utils/getToken';
import RequestCard from './CategoryRequest/RequestCard';

interface Props {
  setPage: (arg: string) => void;
}

const Category = ({ setPage }: Props) => {
  const [data, setData] = useState([]);
  const [requestData, setRequestData] = useState([]);
  const token = getToken('TOKEN') || '';

  useEffect(() => {
    fetch(`${API.category}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    fetch(`${API.category}/sub/request/admin`, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => setRequestData(data));
  }, []);

  const successHandler = () => {
    setPage('');
  };

  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
      <CategoryRequest>
        <SubTitle>카테고리 신청 목록</SubTitle>
        {requestData &&
          requestData?.map((data: any) => {
            return <RequestCard key={data.subCatReqId} data={data} />;
          })}
      </CategoryRequest>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 20px;
  margin: auto;
  min-height: 600px;
  width: 800px;
  border: 2px solid #738cd3;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
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

const CategoryRequest = styled.div`
  width: 90%;
  margin: auto;
  border-top: 2px solid #bbb;
`;

const SubTitle = styled.p`
  margin: 8px;
  font-size: 16px;
`;
