import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CategoryList from '../CategoryList/CategoryList';

const PostCategory = ({ mainCatId, name, statusHandler }) => {
  const [category, setCategory] = useState([]);

  console.log('??', mainCatId);

  useEffect(() => {
    fetch(`${API.category}/sub?mainCatId=${mainCatId}`)
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  return (
    <ListSection>
      {category?.map(e => {
        return (
          <CategoryList
            key={e.subCatId}
            categoryName={e.subCatName}
            subCatId={e.subCatId}
            name={name}
            statusHandler={statusHandler}
          />
        );
      })}
    </ListSection>
  );
};

export default PostCategory;

const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  height: 600px;
  background-color: #c9d9f9;
`;
