import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import CategoryList from '../CategoryList/CategoryList';
import Spinner from '../../../components/Spinner/Spinner';

interface Props {
  mainCatId: string;
  name: string;
  statusHandler: (name: string, id: string) => void;
}

type CategoryData = {
  subCatId: string;
  subCatName: string;
};

const PostCategory = ({ mainCatId, name, statusHandler }: Props) => {
  const [category, setCategory] = useState<CategoryData[]>([]);

  useEffect(() => {
    fetch(`${API.category}/sub?mainCatId=${mainCatId}`)
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  if (!category) return <Spinner />;

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

const ListSection = styled.div<{ theme: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 600px;
  background-color: ${props => props.theme.color1};
  @media screen and (max-width: 700px) {
    flex-direction: row;
    padding: 5px;
    width: 100%;
    height: max-content;
  }
`;
