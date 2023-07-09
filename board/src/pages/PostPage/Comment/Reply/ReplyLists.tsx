import React from 'react';
import { styled } from 'styled-components';
import Button from '../../../../components/Button/Button';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';

export interface ReplyType {
  comment: Comment;
  author: Author;
  user: User;
}

export interface Comment {
  contents: string;
  createdAt: string;
  updatedAt: string;
  commentId: string;
  likes: number;
}

export interface Author {
  accountId: string;
  name: string;
  email: string;
  profileImage: string;
}

export interface User {
  likeStatus: boolean;
  modifyAllowed: boolean;
  deleteAllowed: boolean;
}

const ReplyLists = ({ author, comment, user }: ReplyType) => {
  const token = getToken('TOKEN') || '';

  const DeleteHandler = () => {
    fetch(`${API.comment}/reply`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({ replyId: comment.commentId }),
    }).then(res => res.json());
  };

  return (
    <ReplyContainer>
      <ReplyHeader>
        <ReplyProfile>
          <ProfileImg src={author.profileImage} />
          <Text color="#777" fontsize={14}>
            {author.name}
          </Text>
        </ReplyProfile>
        <ReplyOptions>
          {user.modifyAllowed && (
            <Button name="답글 삭제" fontsize={4} onClick={DeleteHandler} />
          )}
        </ReplyOptions>
      </ReplyHeader>
      <ReplytContent>{comment.contents}</ReplytContent>
    </ReplyContainer>
  );
};

export default ReplyLists;

const ReplyContainer = styled.div`
  border-top: 1px solid #ccc;
  margin-left: 30px;
  padding: 4px;
`;

const ReplyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px;
`;

const ReplyProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 30px;
  border-radius: 15px;
`;

const ReplyOptions = styled.div``;

const ReplytContent = styled.div`
  padding: 6px;
`;

const Text = styled.p<{ color: string; fontsize?: number }>`
  font-size: ${props => props.fontsize}px;
  color: ${props => props.color};
`;
