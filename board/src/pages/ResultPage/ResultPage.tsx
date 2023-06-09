import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../config/config';

const ResultPage = () => {
  const [data, setData] = useState([]);
  const { searchValue } = useParams();

  useEffect(() => {
    fetch(`${API.search}?keyword=${searchValue}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [searchValue]);

  return <div></div>;
};

export default ResultPage;
