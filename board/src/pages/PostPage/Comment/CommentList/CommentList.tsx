import React, { useState } from 'react';
import styled from 'styled-components';
import useCreatedAt from '../../../../utils/hook/useCreatedAt';
import CommentUser from './CommentUser/CommentUser';
import CommentLike from './CommentLike';
import { FaRegComment } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import getFetch from '../../../../utils/dataFetch/getFetch';
import { API } from '../../../../config/config';
import ReplyEditor from '../Reply/ReplyEditor';
import getToken from '../../../../utils/getToken';

interface Props {
  name: string;
  id: string;
  postId: string;
  createdAt: string;
  contents: string;
  likes: number;
  replyCount: number;
  profileImg: string;
  commentId: string;
  accountId: string;
}

const CommentList = ({
  name,
  id,
  postId,
  createdAt,
  contents,
  likes,
  replyCount,
  profileImg,
  commentId,
  accountId,
}: Props) => {
  const commentTime = useCreatedAt(createdAt);
  const [isOpen, setIsOpen] = useState(false);
  const [replyData, setReplyData] = useState([]);
  const token = getToken('TOKEN') || '';

  const replyHandler = () => {
    setIsOpen(prev => !prev);
    if (replyCount === 0) return;
    fetch(`${API.comment}/reply?commentId=${commentId}`, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => setReplyData(data));
  };

  // console.log(`${API.comment}/reply?commentId=${1}`);

  return (
    <List>
      <Section width="100%" fontSize={12}>
        <CommentUser
          name={name}
          profileImg={profileImg}
          accountId={accountId}
        />
        <Section width="100px" fontSize={12}>
          {commentTime}
        </Section>
      </Section>
      <ContentSection>{contents}</ContentSection>
      <ReplySection>
        <CommentLike id={id} postId={postId} likes={likes} />
        {isOpen ? (
          <Div>
            <FaRegCommentDots
              size={20}
              style={{ cursor: 'pointer', marginRight: 10 }}
              onClick={() => setIsOpen(prev => !prev)}
            />
            {replyCount}
          </Div>
        ) : (
          <Div>
            <FaRegComment
              size={20}
              style={{ cursor: 'pointer', marginRight: 10 }}
              onClick={replyHandler}
            />
            {replyCount}
          </Div>
        )}
      </ReplySection>
      {isOpen && <ReplyEditor postId={postId} commentId={id} />}
    </List>
  );
};

export default CommentList;

const List = styled.div`
  padding: 10px;
  border-bottom: 1px solid #c9d9f9;
`;

const Section = styled.div<{ width: string; fontSize: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};
  font-size: ${props => props.fontSize}px;
  color: #666;
`;

const ContentSection = styled.div`
  /* padding-top: 12px; */
  font-size: 16px;
`;

const ReplySection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 10px 0px;
`;

const Div = styled.div`
  display: flex;
`;
