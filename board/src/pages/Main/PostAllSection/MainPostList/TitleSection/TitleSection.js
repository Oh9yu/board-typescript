import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TitleSection = ({ data }) => {
  const img = data?.img ? data.img : 'images/text.png';
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

  const subHandler = () => {
    navigate('/postlist', {
      state: {
        categoryName: data.subCatName,
        queryType: 'subCatId',
        mainCatId: data.mainCatId,
        subCatId: data.subCatId,
      },
    });
  };
  return (
    <Container>
      <Img src={img} />
      <ColumnWrapper>
        <Text fontsize={16} onClick={titleHandler}>
          {data.title}
        </Text>
        <Wrapper>
          <Text fontsize={12} color="#777" onClick={mainHandler}>
            {data.mainCatName}
          </Text>
          <Text fontsize={12} color="#777" onClick={subHandler}>
            {data.subCatName}
          </Text>
        </Wrapper>
        <Text fontsize={12}>{data.name}</Text>
      </ColumnWrapper>
    </Container>
  );
};

export default TitleSection;

const Container = styled.div`
  display: flex;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.p`
  margin-right: 8px;
  width: max-content;
  font-size: ${props => props.fontsize}px;
  color: ${props => props.color};
  padding: 2px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
