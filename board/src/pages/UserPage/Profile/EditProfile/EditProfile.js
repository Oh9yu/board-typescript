import React, { useState } from 'react';
import styled from 'styled-components';
import EditModal from './EditModal/EditModal';

const EditProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalOpenHandler = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      {isOpen && <EditModal />}
      <ModalBtn onClick={modalOpenHandler}>Edit</ModalBtn>
    </Container>
  );
};

export default EditProfile;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 85%;
`;

const ModalBtn = styled.button`
  padding: 2px 5px;
  background-color: #fff;
  border: 2px solid #7594dd;
  border-radius: 3px;
`;
