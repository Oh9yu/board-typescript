import React from 'react';
import styled from 'styled-components';
import useOutSideClick from '../../../../../utils/hook/useOutSideClick';

const EditModal = () => {
  return <Container></Container>;
};

export default EditModal;

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: -300px;
  left: -40px;
  width: 800px;
  height: 500px;
  background-color: #fff;
  border: 2px solid #7594dd;
  border-radius: 8px;
`;
