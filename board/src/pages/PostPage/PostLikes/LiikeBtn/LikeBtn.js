import React from 'react';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';

const LikeBtn = ({ postId }) => {
  const token = getToken;

  const likeHandler = () => {
    fetch(`${API.likes}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ postId }),
    });
  };

  return <div onClick={likeHandler}>zz</div>;
};

export default LikeBtn;
