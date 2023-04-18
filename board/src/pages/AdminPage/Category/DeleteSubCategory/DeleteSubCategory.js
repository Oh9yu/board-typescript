import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button/Button';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';

const DeleteSubCategory = ({ data }) => {
  const [subCat, setSubCat] = useState([]);
  const token = getToken('TOKEN');
  const [options, setOptions] = useState('');
  const [subOptions, setSubOptions] = useState('');

  useEffect(() => {
    fetch(`${API.category}/sub?mainCatId=${options}`)
      .then(res => res.json())
      .then(data => setSubCat(data));
  }, [options]);

  const selectChange = e => {
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
      .then(res => alert(res.message));
  };

  return (
    <Container>
      <Title>Delete Sub Category</Title>
      <Section>
        <Select value={options} onChange={selectChange}>
          {data?.map(e => {
            return (
              <Option key={e.mainCatId} value={e.mainCatId}>
                {e.mainCatName}
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
          {subCat?.map(e => {
            return (
              <Option key={e.subCatId} value={e.subCatId}>
                {e.subCatName}
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
