import React from 'react';
import styled from 'styled-components';
import getAlertText from '../../../../utils/getAlertText';
import { useNavigate } from 'react-router-dom';
import getAlertBodyData from '../../../../utils/getAlertBodyData';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';

const AlertList = ({ data }) => {
  const navigate = useNavigate('');
  const status = data._id.readStatus ? false : true;
  const text = getAlertText(data);
  const token = getToken();

  const clickHandler = () => {
    fetch(`${API.alert}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        accountIds: getAlertBodyData(data),
        postId: data._id.postId,
      }),
    });
    navigate(`/postpage/${data._id.postId}`);
  };

  return (
    <Container onClick={clickHandler}>
      {status && <AlertDot />}
      {text}
    </Container>
  );
};

export default AlertList;

const Container = styled.div`
  position: relative;
  font-size: 12px;
  margin: 5px 0;
  color: #555;
  padding: 3px 2px;
  border-bottom: 1px solid #afc9ff;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background-color: #afc9ff;
    border-radius: 3px;
  }
`;

const AlertDot = styled.span`
  position: absolute;
  top: 1px;
  left: -3px;
  width: 3px;
  height: 3px;
  border-radius: 2px;
  background-color: red;
`;
