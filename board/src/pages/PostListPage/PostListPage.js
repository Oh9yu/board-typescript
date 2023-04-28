import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostCategory from './PostCategory/PostCategory';
import PostSection from './PostSection/PostSection';
import Button from '../../components/Button/Button';

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

  const statusHandler = (name, id) => {
    setStatus({ ...status, name: name, queryType: 'subCatId', subCatId: id });
  };

  const listAll = () => {
    setStatus({
      ...status,
      name: '',
      queryType: 'mainCatId',
      subCatId: mainCat.mainCatId,
    });
  };

  return (
    <Container>
      <Title onClick={listAll}>{location.state.categoryName}</Title>
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
        status={status.subCatId}
        queryType={status.queryType}
        mainCatId={mainCat.mainCatId}
      />
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
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 36px;
  color: #333;
  cursor: pointer;
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
`;
