import React from 'react';
import styled from 'styled-components';

interface Props {
  views: number;
  name: string;
  profileImg: string;
}

const PostSubHeader = ({ views, name, profileImg }: Props) => {
  return (
    <Container>
      <Section>
        <Img src={profileImg ? profileImg : 'images/user.png'} />
        <Text fontSize={20}>{name ? name : 'Unknown'}</Text>
      </Section>
      <Section>
        <Text fontSize={14}>조회수 {views}</Text>
      </Section>
    </Container>
  );
};

export default PostSubHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  height: 40px;
  border-bottom: 1px solid #7594dd;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-right: 10px;
`;

const Text = styled.div<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
`;
