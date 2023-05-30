import React, { useState } from 'react';
import styled from 'styled-components';
import useCreatedAt from '../../../../utils/hook/useCreatedAt';
import CommentUser from './CommentUser/CommentUser';
import CommentLike from './CommentLike';
import { FaRegComment } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';

interface Props {
  name: string;
  id: string;
  postId: string;
  createdAt: string;
  contents: string;
  likes: number;
  replyCount: number;
}

const CommentList = ({
  name,
  id,
  postId,
  createdAt,
  contents,
  likes,
  replyCount,
}: Props) => {
  const commentTime = useCreatedAt(createdAt);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <List>
      <Section width="100%" fontSize={12}>
        <CommentUser name={name} />
        <Section width="100px" fontSize={12}>
          {commentTime}
        </Section>
      </Section>
      <ContentSection>{contents}</ContentSection>
      <ReplySection>
        <CommentLike id={id} postId={postId} likes={likes} />
        {isOpen ? (
          <FaRegCommentDots size={20} style={{ cursor: 'pointer' }} />
        ) : (
          <FaRegComment size={20} style={{ cursor: 'pointer' }} />
        )}
      </ReplySection>
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
