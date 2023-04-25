import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../../../../utils/hook/useOutSideClick';

const Alert = () => {
  const alertCounts = 19;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useOutSideClick(ref, () => {
    setIsVisible(false);
  });

  return (
    <Container>
      <AlertCount>{alertCounts}</AlertCount>
      <Img
        src="images/bell.png"
        onClick={() => {
          if (isVisible === true) return;
          setIsVisible(true);
        }}
      />
      {isVisible && (
        <AlertSection isVisible={isVisible} ref={ref}>
          zz
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
  width: 45px;
  padding: 5px;
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
  right: 3px;
  min-width: 18px;
  padding: 2px;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  background-color: red;
`;

const AlertSection = styled.section`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50px;
  left: 0px;
  background-color: #f9fbff;
`;
