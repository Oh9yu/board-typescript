import React from 'react';
import styled from 'styled-components';
import useCreatedAt from '../../../../utils/hook/useCreatedAt';
import TitleSection from './TitleSection';

interface Props {
  accountId: string;
  createdAt: string;
  email: string;
  likes: number;
  mainCatId: string;
  mainCatName: string;
  name: string;
  postId: string;
  profileImage: string;
  subCatId: string;
  subCatName: string;
  title: string;
  updatedAt: string;
  views: number;
}

const MainPostList = ({ data }: { data: Props }) => {
  const createdAt = useCreatedAt(data.createdAt);

  return (
    <Container>
      <Wrapper>
        <ColumnSection>
          <Img width={24} height={24} src="/images/like.png" />
          {data.likes}
        </ColumnSection>
        <TitleSection data={data} />
      </Wrapper>
      <ColumnSection color="#666">{createdAt}</ColumnSection>
    </Container>
  );
};

export default MainPostList;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 1024px; */
  margin-top: 8px;
  border-bottom: 2px solid #ddd;
  @media screen and (max-width: 600px) {
    margin-top: 5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const ColumnSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: max-content;
  height: 60px;
  font-size: 12px;
  color: ${props => props.color};
`;

const Img = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;
