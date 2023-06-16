import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button/Button';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';

type MainCat = {
  mainCatId: string;
  mainCatName: string;
};

type Props = {
  data: MainCat[];
  onSuccess: () => void;
};

type SubCategory = {
  subCatId: string;
  subCatName: string;
};

const DeleteSubCategory = ({ data, onSuccess }: Props) => {
  const [subCat, setSubCat] = useState<SubCategory[]>([]);
  const token = getToken('TOKEN');
  const [options, setOptions] = useState('');
  const [subOptions, setSubOptions] = useState('');

  useEffect(() => {
    fetch(`${API.category}/sub?mainCatId=${options}`)
      .then(res => res.json())
      .then(data => setSubCat(data));
  }, [options]);

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setOptions(e.target.value);
  };

  const buttonHandler = () => {
    fetch(`${API.category}/sub/admin`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        subCatId: subOptions,
      }),
    })
      .then(response => response.json())
      .then(res => alert(res.message))
      .then(() => onSuccess());
  };

  return (
    <Container>
      <Title>Delete Sub Category</Title>
      <Section>
        <Select value={options} onChange={selectChange}>
          {data?.map(data => {
            return (
              <Option key={data.mainCatId} value={data.mainCatId}>
                {data.mainCatName}
              </Option>
            );
          })}
        </Select>
        <Select
          value={subOptions}
          onChange={e => {
            setSubOptions(e.target.value);
          }}
        >
          {subCat?.map(data => {
            return (
              <Option key={data.subCatId} value={data.subCatId}>
                {data.subCatName}
              </Option>
            );
          })}
        </Select>
      </Section>
      <Section>
        <Button name="Delete" onClick={buttonHandler} />
      </Section>
    </Container>
  );
};

export default DeleteSubCategory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 300px;
  height: 150px;
  border: 2px solid #9ab2eb;
  padding: 10px;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    width: 240px;
  }
`;

const Title = styled.p`
  color: #555;
  font-size: 18px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const Select = styled.select`
  margin-top: 10px;
  width: 100px;
  height: 25px;
`;

const Option = styled.option``;
