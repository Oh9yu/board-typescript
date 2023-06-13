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
  showCount: number;
}

type MovePageBtnProps = {
  img: string;
};

const Pagenation = ({
  page,
  setPage,
  pageLength,
  showCount,
}: PageNationType) => {
  const pagenationArray = pageLength ? getPagenationList(pageLength) : [];

  return (
    <Container>
      <PageSection>
        {/* 처음으로 */}
        <MovePageBtn
          type="button"
          img="images/leftbtn2.png"
          onClick={() => {
            if (page <= 1) return;
            setPage(1);
          }}
        />

        {/* 이전으로 */}
        <MovePageBtn
          type="button"
          img="images/leftbtn.png"
          onClick={() => {
            if (page <= 1) return;
            setPage(page - 1);
          }}
        />

        {/* Number 페이지네이션 */}
        {pagenationArray[Math.ceil(page / showCount) - 1]?.map(value => {
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
        <MovePageBtn
          type="button"
          img="images/rightbtn.png"
          onClick={() => {
            if (page >= pageLength) return;
            setPage(page + 1);
          }}
        />
        {/* 마지막으로 */}
        <MovePageBtn
          type="button"
          img="images/rightbtn2.png"
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

const MovePageBtn = styled.input<MovePageBtnProps>`
  margin: 3px;
  border: none;
  width: 20px;
  height: 20px;
  background: url(${props => props.img});
  background-color: transparent;
  border-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
