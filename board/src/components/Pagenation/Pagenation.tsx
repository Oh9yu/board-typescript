import React from 'react';
import styled from 'styled-components';
import PageNumBtn from './PageNumBtn/PageNumBtn';
import getPagenationList from '../../utils/getPagenationList';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

interface PageNationType {
  page: number;
  pageLength: number;
  setPage: (value: number) => void;
}

const Pagenation = ({ page, setPage, pageLength }: PageNationType) => {
  const pagenationArray = getPagenationList(pageLength);

  return (
    <Container>
      <PageSection>
        {/* 처음으로 */}
        <AiOutlineDoubleLeft
          size="25px"
          onClick={() => {
            if (page <= 1) return;
            setPage(1);
          }}
        />

        {/* 이전으로 */}
        <AiOutlineLeft
          size="25px"
          onClick={() => {
            if (page <= 1) return;
            setPage(page - 1);
          }}
          width="30px"
        />
        {/* Number 페이지네이션 */}
        {pagenationArray[Math.ceil(page / 5) - 1]?.map(value => {
          return (
            <PageNumBtn
              key={value}
              value={value}
              setPage={setPage}
              page={page}
            />
          );
        })}
        {/* 다음으로 */}
        <AiOutlineRight
          size="25px"
          onClick={() => {
            if (page >= pageLength) return;
            setPage(page + 1);
          }}
        />
        {/* 마지막으로 */}
        <AiOutlineDoubleRight
          className="my-icon"
          onClick={() => {
            if (page >= pageLength) return;
            setPage(pageLength);
          }}
        />
      </PageSection>
    </Container>
  );
};

export default Pagenation;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageSection = styled.section`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const MovePageBtn = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    background-color: #eee;
  }
`;
