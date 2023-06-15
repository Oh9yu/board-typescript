import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const TitleSection = ({ data }: { data: Props }) => {
  const img = 'images/text.png';
  const navigate = useNavigate();

  const titleHandler = () => {
    navigate(`/postpage/${data.postId}`);
  };

  const mainHandler = () => {
    navigate('/postlist', {
      state: {
        categoryName: data.mainCatName,
        queryType: 'mainCatId',
        mainCatId: data.mainCatId,
      },
    });
  };

  const userHandler = () => {
    if (!data.name) return;
    navigate('/userpage', {
      state: {
        accountId: data.accountId,
      },
    });
  };

  return (
    <Container>
      <Img src={img} />
      <ColumnWrapper>
        <Text fontSize={16} onClick={titleHandler}>
          {data.title}
        </Text>
        <Wrapper>
          <Text fontSize={12} color="#777" onClick={mainHandler}>
            {data.mainCatName}
          </Text>
          <Text fontSize={12} color="#777">
            {data.subCatName}
          </Text>
        </Wrapper>
        <Text fontSize={12} onClick={userHandler}>
          {data.name ? data.name : 'Unknown'}
        </Text>
      </ColumnWrapper>
    </Container>
  );
};

export default TitleSection;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.p<{ fontSize: number }>`
  margin-right: 8px;
  width: max-content;
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  padding: 2px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 1px;
  }
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 48px;
    height: 48px;
  }
`;
