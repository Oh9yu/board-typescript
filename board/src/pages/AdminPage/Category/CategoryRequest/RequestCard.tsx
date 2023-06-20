import React from 'react';
import { styled } from 'styled-components';
import getToken from '../../../../utils/getToken';
import { API } from '../../../../config/config';
import { useNavigate } from 'react-router-dom';

const RequestCard = ({ data }: any) => {
  const token = getToken('TOKEN') || '';
  const navigate = useNavigate();

  const acceptHandler = () => {
    fetch(`${API.category}/sub/request/admin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({ subCatReqId: data.subCatReqId }),
    })
      .then(res => res.json())
      .then(() => {
        navigate('/');
      });
  };

  const denyHandler = () => {
    fetch(`${API.category}/sub/request/admin`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({ subCatReqId: data.subCatReqId }),
    })
      .then(res => res.json())
      .then(() => {
        navigate('/');
      });
  };

  return (
    <Container>
      <CategoryInfo>
        <Wrapper>
          <Tag>{data.mainCatName}</Tag>
          <Tag>{data.userName}</Tag>
        </Wrapper>
        <CategoryTag>{data.subCatName}</CategoryTag>
      </CategoryInfo>
      <Response>
        <ResBtn color="#008000" onClick={acceptHandler}>
          수락
        </ResBtn>
        <ResBtn color="#ff0000" onClick={denyHandler}>
          거절
        </ResBtn>
      </Response>
    </Container>
  );
};

export default RequestCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #7594dd;
  border-radius: 5px;
  padding: 8px;
  margin: 4px;
`;

const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  font-size: 12px;
  padding: 2px 5px;
  margin: 4px;
  background-color: #c9d9f9;
  border-radius: 5px;
`;

const CategoryTag = styled.div`
  color: #111;
  width: max-content;
  padding: 5px;
  margin: 4px;
`;

const Response = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResBtn = styled.button<{ color: string }>`
  background-color: #fff;
  border: 2px solid ${props => props.color};
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 5px;
  margin: 2px;
  color: ${props => props.color};
  &:hover {
    background-color: ${props => props.color};
    color: #fff;
    opacity: 0.8;
  }
`;
