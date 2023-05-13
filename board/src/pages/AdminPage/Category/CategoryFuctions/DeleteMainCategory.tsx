import React, { useState } from 'react';
import styled from 'styled-components';
import getToken from '../../../../utils/getToken';
import Button from '../../../../components/Button/Button';
import { API } from '../../../../config/config';

type MainCat = {
  mainCatId: string;
  mainCatName: string;
};

type Props = {
  data: MainCat[];
};

const DeleteMainCategory = ({ data }: Props) => {
  const token = getToken('TOKEN');
  const [options, setOptions] = useState('');

  console.log(options);

  const buttonHandler = () => {
    fetch(`${API.category}/admin`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ mainCatId: options }),
    })
      .then(res => res.json())
      .then(res => alert(res.message));
  };
  return (
    <Container>
      <Title>Delete Main Category</Title>
      <Section>
        <Select
          value={options}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
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
        <Button name="Delete" onClick={buttonHandler} />
      </Section>
    </Container>
  );
};

export default DeleteMainCategory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 300px;
  height: 150px;
  border: 2px solid #9ab2eb;
  padding: 10px;
  border-radius: 5px;
`;
const Title = styled.p`
  color: #555;
  font-size: 18px;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 50px;
`;

const Select = styled.select`
  width: 130px;
  height: 30px;
`;

const Option = styled.option``;
