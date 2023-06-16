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
};

const EditMainCategory = ({ data }: Props) => {
  const token = getToken('TOKEN');
  const [options, setOptions] = useState('');
  const [inputValue, setInputValue] = useState('');

  const buttonHandler = () => {
    fetch(`${API.category}/admin`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ newMainCatName: inputValue, mainCatId: options }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.message.includes('already exists')) {
          alert(res.message);
        } else alert(res.message);
      });
    setInputValue('');
  };

  useEffect(() => {
    setOptions(data[0]?.mainCatId);
  }, [data]);

  return (
    <Container>
      <Title>Edit Main Category</Title>
      <Select
        value={options}
        onChange={e => {
          setOptions(e.target.value);
        }}
      >
        {data?.map(data => {
          return (
            <Option key={data.mainCatId} value={data.mainCatId}>
              {data.mainCatName}
            </Option>
          );
        })}
      </Select>

      <Section>
        <Input
          type="text"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
          placeholder="Main Category Name"
        />
        <Button name="Edit" onClick={buttonHandler} />
      </Section>
    </Container>
  );
};

export default EditMainCategory;

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

const Input = styled.input`
  width: 150px;
  height: 30px;
  margin-right: 5px;
  padding-left: 5px;
  border: 2px solid #c9d9f9;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #7594dd;
  }
`;

const Select = styled.select`
  margin-top: 10px;
  width: 100px;
  height: 25px;
`;

const Option = styled.option``;
