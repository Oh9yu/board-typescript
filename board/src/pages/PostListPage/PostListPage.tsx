import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostCategory from './PostCategory/PostCategory';
import PostSection from './PostSection/PostSection';
import Button from '../../components/Button/Button';
import SubCatRequest from './SubCatRequest/SubCatRequest';

type StatusHandlerType = (name: string, id: string) => void;

const PostListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [status, setStatus] = useState({
    name: location.state.categoryName,
    queryType: location.state.queryType,
    subCatId: location.state.subCatId,
  });
  const mainCat = {
    name: location.state.categoryName,
    mainCatId: location.state.mainCatId,
  };
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const pageHandler = (page: number) => {
    setPage(page);
  };

  const statusHandler: StatusHandlerType = (name, id) => {
    setStatus({
      ...status,
      name: name,
      queryType: 'subCatId',
      subCatId: id,
    });
    setPage(1);
  };

  const listAll = () => {
    setStatus({
      ...status,
      name: '',
      queryType: 'mainCatId',
      subCatId: mainCat.mainCatId,
    });
  };

  const openHandler = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Container>
      <TitleSection>
        <Title onClick={listAll}>{location.state.categoryName}</Title>
      </TitleSection>
      <Section>
        {(status.queryType === 'mainCatId' ||
          status.queryType === undefined) && (
          <SubCat>
            <Button name="카테고리 신청" onClick={openHandler} />
            {isOpen && (
              <SubCatRequest
                openHandler={openHandler}
                mainCatId={mainCat.mainCatId}
              />
            )}
          </SubCat>
        )}
        {status.name.length > 0 && status.name !== mainCat.name && (
          <SubCat>
            {status.name}
            <Button
              name="글쓰기"
              onClick={() => {
                navigate('/editor', {
                  state: {
                    mainCatId: mainCat.mainCatId,
                    subCatId: status.subCatId,
                  },
                });
              }}
            />
          </SubCat>
        )}
        <PostCategory
          mainCatId={mainCat.mainCatId}
          name={status.name}
          statusHandler={statusHandler}
        />
        <PostSection
          catId={status.subCatId ? status.subCatId : mainCat.mainCatId}
          queryType={status.queryType}
          page={page}
          pageHandler={pageHandler}
        />
      </Section>
    </Container>
  );
};

export default PostListPage;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;
  min-height: 95vh;
  background-color: ${props => props.theme.backGroundTheme};
  transition: 0.2s;
`;

const Section = styled.section`
  margin: auto;
  width: 1024px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.backGroundTheme};
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  color: ${props => props.theme.fontColor};
  @media screen and (max-width: 600px) {
    height: 50px;
  }
`;

const Title = styled.p`
  font-size: 36px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const SubCat = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  top: 40px;
  width: 180px;
  height: 50px;
  font-size: 18px;
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    top: 5px;
    justify-content: space-around;
    font-size: 14px;
  }
`;
