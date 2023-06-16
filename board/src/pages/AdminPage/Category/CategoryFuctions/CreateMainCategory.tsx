import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button/Button';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';

interface Props {
  onSuccess: () => void;
}

const CreateMainCategory = ({ onSuccess }: Props) => {
  const token = getToken('TOKEN');
  const [inputValue, setInputValue] = useState('');

  const buttonHandler = () => {
    fetch(`${API.category}/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ mainCatName: inputValue }),
    })
      .then(response => response.json())
      .then(res => alert(res.message))
      .then(() => onSuccess());
  };

  return (
    <Container>
      <Title>Create Main Category</Title>
      <Section>
        <Input
          type="text"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
          placeholder="Main Category Name"
        />
        <Button name="Create" onClick={buttonHandler} />
      </Section>
    </Container>
  );
};

export default CreateMainCategory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
