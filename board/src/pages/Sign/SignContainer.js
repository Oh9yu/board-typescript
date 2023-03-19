import React, { useState } from 'react';
import styled from 'styled-components';

const SignContainer = props => {
  const sign = props;
  const form = sign.form;
  const onClick = sign.onClick;

  return (
    <Container>
      <SingSection>
        <Title>{form}</Title>
        <Button onClick={onClick}>{form}</Button>
      </SingSection>
    </Container>
  );
};

export default SignContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #f9fbff;
`;

const SingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  border: 2px solid #7594dd;
  border-radius: 8px;
`;

const Title = styled.section`
  font-size: 24px;
  margin: 10px 0;
`;

const Button = styled.button`
  width: 250px;
  height: 30px;
  margin: 10px 0;
  border: 2px solid #7594dd;
  border-radius: 5px;
  background-color: transparent;
  &:hover {
    border: 2px solid #7594dd;
    background-color: #7594dd;
  }
`;
