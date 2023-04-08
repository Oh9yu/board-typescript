import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../config/config';
import Category from './Category/Category';

const Main = () => {
  const [data, setData] = useState([]);

  return (
    <Container>
      <Section>
        <Category />
      </Section>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  height: 100vh;
  background-color: #f9fbff;
`;

const Section = styled.section`
  display: flex;
  width: 1024px;
  height: 100vh;
  padding-top: 30px;
`;
