import React, { useState } from 'react';
import styled from 'styled-components';
import UserModal from './UserModal';

interface Props {
  name: string;
}

const CommentUser = ({ name }: Props) => {
  const [modal, setmodal] = useState(false);

  return (
    <User
      onMouseEnter={() => {
        setmodal(true);
      }}
      onMouseLeave={() => {
        setmodal(false);
      }}
    >
      {name}
      {modal && <UserModal />}
    </User>
  );
};

export default CommentUser;

const User = styled.div`
  position: relative;
  font-size: 14px;
  padding: 5px 10px;
  width: max-content;
  cursor: pointer;
`;
