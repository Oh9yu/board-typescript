import React, { useState } from 'react';
import styled from 'styled-components';
import UserModal from './UserModal';

interface Props {
  name: string;
  profileImg: string;
  accountId: string;
}

const CommentUser = ({ name, profileImg, accountId }: Props) => {
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
      <Profile src={profileImg ? profileImg : 'images/user.png'} />
      {name ? name : 'Unknown'}
      {modal && name && <UserModal accountId={accountId} />}
    </User>
  );
};

export default CommentUser;

const User = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  padding: 5px 10px;
  width: max-content;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
`;
