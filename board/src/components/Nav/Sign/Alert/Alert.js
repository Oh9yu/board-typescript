import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../../../../utils/hook/useOutSideClick';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';
import getAlertCount from '../../../../utils/getAlertCount';
import AlertList from './AlertList';

const Alert = () => {
  const token = getToken();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const [data, setData] = useState([]);
  const alertCounts = getAlertCount(data);

  useEffect(() => {
    fetch(`${API.alert}`, { headers: { Authorization: token } })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  useOutSideClick(ref, () => {
    setIsVisible(false);
  });

  return (
    <Container>
      {alertCounts > 0 && <AlertCount>{alertCounts}</AlertCount>}
      <Img
        src="images/bell.png"
        onClick={() => {
          if (isVisible === false) {
            setIsVisible(true);
          } else setIsVisible(false);
        }}
      />
      {isVisible && (
        <AlertSection isVisible={isVisible} ref={ref}>
          {data.length === 0 ? (
            <AlertText>알림이 없습니다</AlertText>
          ) : (
            data?.map(data => {
              return <AlertList data={data} key={data._id.postId} />;
            })
          )}
        </AlertSection>
      )}
    </Container>
  );
};

export default Alert;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 36px;
  /* padding: 5px; */
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background-color: #afc9ff;
  }
`;

const AlertCount = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 3px;
  right: 0;
  min-width: 18px;
  padding: 1px;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  background-color: red;
`;

const AlertText = styled.p`
  font-size: 14px;
  color: #aaa;
`;

const AlertSection = styled.section`
  position: absolute;
  width: 300px;
  padding: 10px;
  top: 55px;
  left: 0px;
  z-index: 1;
  border: 2px solid #afc9ff;
  border-radius: 5px;
  background-color: #f9fbff;
`;
