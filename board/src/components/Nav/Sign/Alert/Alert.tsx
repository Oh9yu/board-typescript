import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../../../../utils/hook/useOutSideClick';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';
import getAlertCount from '../../../../utils/getAlertCount';
import AlertList from './AlertList';

interface PostData {
  accountId: string;
  name: string;
  title: string;
}

interface Post {
  _id: {
    postId: string;
    readStatus: boolean;
  };
  data: PostData[];
}

const Alert = () => {
  //fetch headerr type 이 string
  const token = getToken('TOKEN') || 'null';
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);
  const [data, setData] = useState<Post[]>([]);
  const alertCounts = getAlertCount(data);

  useOutSideClick(ref, () => {
    setIsVisible(false);
  });

  useEffect(() => {
    fetch(`${API.alert}`, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

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
        <AlertSection ref={ref}>
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
  @media screen and (max-width: 600px) {
    width: 30px;
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
  right: -150px;
  z-index: 1;
  border: 2px solid #afc9ff;
  border-radius: 5px;
  background-color: #f9fbff;
  @media screen and (max-width: 600px) {
    width: 200px;
    padding: 5px;
    top: 40px;
    right: -120px;
  }
`;
