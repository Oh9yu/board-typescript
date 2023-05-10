import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { API } from '../../config/config';
import Category from './Category/Category';
import HotPostSection from './HotPostSection/HotPostSection';
import PostAllSection from './PostAllSection/PostAllSection';
// import { useParams } from 'react-router-dom';

const Main = () => {
  return (
    <Container>
      <Section>
        <Category />
        <HotPostSection />
        <PostAllSection />
      </Section>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 10px;
  background-color: #f9fbff;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
`;
