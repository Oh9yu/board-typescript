import React, { useState } from 'react';
import { styled, useTheme } from 'styled-components';
import { HiOutlineXCircle } from 'react-icons/hi';
import { API } from '../../../config/config';
import getToken from '../../../utils/getToken';

interface Props {
  openHandler: () => void;
  mainCatId: string;
}

const SubCatRequest = ({ openHandler, mainCatId }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const token = getToken('TOKEN') || '';
  const theme = useTheme();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitHandler = () => {
    if (!inputValue) return;
    fetch(`${API.category}/sub/request/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({ subCatName: inputValue, mainCatId: mainCatId }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'Given subCategory already exists') {
          alert('이미 존재하는 카테고리입니다');
          setInputValue('');
        } else if (res.message === 'Sub category has been requested') {
          alert('카테고리 신청했습니다');
          openHandler();
          setInputValue('');
        }
      });
  };

  return (
    <Container>
      <TitleSection>
        <Title>카테고리 이름을 입력해주세요</Title>
        <Exit>
          <HiOutlineXCircle
            size={18}
            onClick={openHandler}
            color={theme?.borderColer1}
          />
        </Exit>
      </TitleSection>
      <FormSection>
        <Input value={inputValue} onChange={inputHandler} />
        <Button onClick={submitHandler}>제출</Button>
      </FormSection>
    </Container>
  );
};

export default SubCatRequest;

const Container = styled.div<{ theme: any }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 40px;
  width: 180px;
  height: max-content;
  padding: 8px 0;
  background-color: ${props => props.theme.backGroundColor1};
  border: 2px solid ${props => props.theme.borderColor2};
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    left: 0px;
  }
`;
const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.div`
  color: ${props => props.theme.fontColor};
  font-size: 12px;
  @media screen and (max-width: 600px) {
  }
`;

const Exit = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const FormSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
`;

const Input = styled.input`
  width: 130px;
  height: 30px;
  padding: 5px;
  border: 2px solid ${props => props.theme.borderColor2};
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.borderColor3};
  }
`;

const Button = styled.button`
  width: 40px;
  background-color: ${props => props.theme.backGroundColor1};
  color: ${props => props.theme.fontColor};
  border: 2px solid ${props => props.theme.borderColor1};
  border-radius: 5px;
  &:hover {
    background-color: ${props => props.theme.hoverColor1};
  }
`;
