import React from 'react';
import styled from 'styled-components';
import getCreatedAt from '../../../../utils/getCreatedAt';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: TopLikePosts[] | undefined;
}

interface TopLikePosts {
  accountId: string;
  title: string;
  views: number;
  createdAt: string;
  postId: string;
  likes: number;
}

const LikesCountPosts = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>추천수 TOP</Title>
      <Body>
        {data &&
          data.map(data => {
            return (
              <Section
                key={data.postId}
                onClick={() => {
                  navigate(`/postpage/${data.postId}`);
                }}
              >
                <MainContents>
                  <LikeBox>
                    <LikeImg src="images/like.png" />
                    {data.likes}
                  </LikeBox>
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

export default LikesCountPosts;

const Container = styled.div<{ theme: any }>`
  width: 100%;
  min-width: 100px;
  padding: 10px;
  border: 2px solid ${props => props.theme.borderColor1};
  border-radius: 5px;
  background-color: ${props => props.theme.backGroundColor1};
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

const LikeImg = styled.img`
  width: 18px;
  margin-right: 2px;
`;

const LikeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding-top: 2px;
  border-radius: 2px;
  color: ${props => props.theme.fontColor};
  margin-right: 5px;
  font-size: 10;
`;

const Box = styled.div`
  font-size: 14px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
