import React from 'react';
import styled from 'styled-components';
import useCreatedAt from '../../../../utils/hook/useCreatedAt';
import CommentUser from './CommentUser/CommentUser';
import CommentLike from './CommentLike/CommentLike';

const CommentList = ({ name, id, postId, createdAt, contents }) => {
  const commentTime = useCreatedAt(createdAt);

  console.log(commentTime);

  return (
    <List>
      <Section width="100%">
        <CommentUser name={name} />
        <Section width="150px">
          {commentTime}
          <CommentLike id={id} postId={postId} />
        </Section>
      </Section>
    </List>
  );
};

export default CommentList;

const List = styled.div`
  margin: 5px;
  padding: 15px;
  border-bottom: 1px solid #7594dd;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};
  font-size: 12px;
  color: #666;
`;

const ListBody = styled.div``;
