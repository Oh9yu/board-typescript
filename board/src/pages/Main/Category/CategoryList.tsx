import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  mainCatId: string;
  name: string;
}

const CategoryList = ({ mainCatId, name }: Props) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/postlist', {
      state: { mainCatId: mainCatId, categoryName: name },
    });
  };

  return <List onClick={clickHandler}>{name}</List>;
};

export default CategoryList;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #738cd3;
    transition: 0.2s;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
