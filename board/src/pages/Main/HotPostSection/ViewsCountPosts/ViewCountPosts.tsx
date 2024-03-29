import React from 'react';
import styled from 'styled-components';
import getCreatedAt from '../../../../utils/getCreatedAt';
import { GrFormView } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: TopViewPosts[] | undefined;
}

interface TopViewPosts {
  _id: string;
  accountId: string;
  mainCatId: string;
  subCatId: string;
  title: string;
  contents: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ViewCountPosts = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>조회수 TOP</Title>
      <Body>
        {data &&
          data.map(data => {
            return (
              <Section
                key={data._id}
                onClick={() => navigate(`/postpage/${data._id}`)}
              >
                <MainContents>
                  <ViewBox>
                    <GrFormView size={20} />
                    {data.views}
                  </ViewBox>
                  <Box>{data.title}</Box>
                </MainContents>
                <SubContents>
                  <Box>{getCreatedAt(data.createdAt)}</Box>
                </SubContents>
              </Section>
            );
          })}
      </Body>
    </Container>
  );
};

export default ViewCountPosts;

const Container = styled.div<{ theme: any }>`
  width: 100%;
  padding: 10px;
  border: 2px solid ${props => props.theme.borderColor1};
  border-radius: 5px;
  background-color: ${props => props.theme.backGroundColor1};
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Title = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  width: 100%;
  border-radius: 3px;

  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.hoverColor1};
  }
`;

const MainContents = styled.div`
  display: flex;
  align-items: center;
`;

const SubContents = styled.div`
  display: flex;
  align-items: center;
`;

const ViewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding-top: 2px;
  border-radius: 2px;
  color: ${props => props.theme.fontColor};
  margin-right: 5px;
`;

const Box = styled.div`
  font-size: 14px;
`;
