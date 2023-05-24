import React from 'react';
import styled from 'styled-components';
import useCreatedAt from '../../../../utils/hook/useCreatedAt';
import CommentUser from './CommentUser/CommentUser';
import CommentLike from './CommentLike';

interface Props {
  name: string;
  id: string;
  postId: string;
  createdAt: string;
  contents: string;
  likes: number;
}

const CommentList = ({
  name,
  id,
  postId,
  createdAt,
  contents,
  likes,
}: Props) => {
  const commentTime = useCreatedAt(createdAt);

  return (
    <List>
      <Section width="100%" fontSize={12}>
        <CommentUser name={name} />
        <Section width="150px" fontSize={12}>
          {commentTime}
          <CommentLike id={id} postId={postId} likes={likes} />
        </Section>
      </Section>
      <ContentSection>{contents}</ContentSection>
    </List>
  );
};

export default CommentList;

const List = styled.div`
  /* margin: 5px; */
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
  font-size: 12px;
`;
