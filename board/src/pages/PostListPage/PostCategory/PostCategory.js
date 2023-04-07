import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CategoryList from '../CategoryList/CategoryList';

const PostCategory = ({ postId, status, statusHandler }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`${API.category}/sub?mainCatId=${postId}`)
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  return (
    <ListSection>
      {category?.map(e => {
        return (
          <CategoryList
            key={e._id}
            categoryName={e.subCatName}
            status={status}
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
  width: 200px;
  height: 600px;
  background-color: #c9d9f9;
`;
