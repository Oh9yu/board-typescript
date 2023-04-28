import React from 'react';
import styled from 'styled-components';
import PageNumBtn from './PageNumBtn/PageNumBtn';
import getPagenationList from '../../utils/getPagenationList';

const Pagenation = ({ page, setPage, pageLength, totalCount }) => {
  const pagenationArray = getPagenationList(pageLength);

  console.log(Math.ceil(page / 5));
  console.log(pagenationArray);
  console.log(pageLength);

  return (
    <Container>
      <PageSection>
        {/* 처음으로 */}
        <MovePageBtn
          onClick={() => {
            if (page <= 1) return console.log('안됨 ㅋ');
            setPage(1);
            console.log('됨 ㅋ');
          }}
        >
          처음으로
        </MovePageBtn>
        {/* 이전으로 */}
        <MovePageBtn
          onClick={() => {
            if (page <= 1) return console.log('안됨 ㅋ');
            setPage(page - 1);
            console.log('됨ㅋ');
          }}
        >
          이전으로
        </MovePageBtn>
        {/* Number 페이지네이션 */}
        {pagenationArray[Math.ceil(page / 5) - 1]?.map(value => {
          return <PageNumBtn key={value} value={value} />;
        })}
        {/* 다음으로 */}
        <MovePageBtn
          onClick={() => {
            if (page >= pageLength) return console.log('안됨 ㅋ');
            setPage(page + 1);
            console.log('됨 ㅋ');
          }}
        >
          다음으로
        </MovePageBtn>
        {/* 마지막으로 */}
        <MovePageBtn
          onClick={() => {
            if (page >= pageLength) return console.log('안됨 ㅋ');
            setPage(pageLength);
            console.log('됨 ㅋ');
          }}
        >
          마지막
        </MovePageBtn>
      </PageSection>
    </Container>
  );
};

export default Pagenation;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`;

const PageSection = styled.section`
  width: 500px;
  display: flex;
  padding: 10px;
  background-color: #ccc;
`;

const MovePageBtn = styled.button``;
