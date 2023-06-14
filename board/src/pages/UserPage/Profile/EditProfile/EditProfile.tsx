import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../../../../utils/hook/useOutSideClick';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';
import { useNavigate } from 'react-router-dom';
import EditPassWord from './EditPassWord';

const EditProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [editForm, setEditForm] = useState({
    profileImg: '',
    descriptions: '',
  });
  const navigate = useNavigate();
  const token = getToken('TOKEN') || '';

  const modalHandler = () => {
    setIsOpen(prev => !prev);
  };
  const descHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditForm({ ...editForm, descriptions: e.target.value });
  };

  useOutSideClick(ref, modalHandler);

  const imgChangeHander = (e: any) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    fetch(`${API.upload}`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => setEditForm({ ...editForm, profileImg: data.url }));
  };

  const profileEditHandler = () => {
    if (!editForm.profileImg && !editForm.descriptions) return;
    fetch(`${API.user}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({
        profileImage: editForm.profileImg,
        descriptions: editForm.descriptions,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'Successfully updated user information') {
          alert('회원정보를 수정했습니다');
          navigate('/');
        }
      });
  };

  return (
    <Container>
      {isOpen && (
        <Modal ref={ref}>
          <Title>회원정보 수정</Title>
          <FormSection>
            <PreviewSection>
              <Img
                src={
                  editForm.profileImg ? editForm.profileImg : 'images/user.png'
                }
              />
              <ProfileBtn htmlFor="imgUpload" />
            </PreviewSection>
            <Uploadfile
              type="file"
              id="imgUpload"
              onChange={imgChangeHander}
              accept="image/png, image/jpeg"
            />
            <Desc
              type="text"
              maxLength={20}
              value={editForm.descriptions}
              placeholder="20자 이내 자기소개"
              onChange={descHandler}
            />
            <SubmitBtn onClick={profileEditHandler}>프로필 정보 변경</SubmitBtn>
          </FormSection>
          <EditPassWord modalHandler={modalHandler} />
        </Modal>
      )}
      <ModalBtn onClick={modalHandler}>Edit</ModalBtn>
    </Container>
  );
};

export default EditProfile;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 85%;
`;

const ModalBtn = styled.button`
  padding: 2px 5px;
  background-color: #fff;
  border: 2px solid #7594dd;
  border-radius: 3px;
`;

const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: -300px;
  left: -40px;
  width: 800px;
  padding: 20px;
  height: 500px;
  background-color: #fff;
  border: 2px solid #7594dd;
  border-radius: 8px;
  @media screen and (max-width: 800px) {
    width: 100%;
    left: 0;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60%;
`;

const PreviewSection = styled.section`
  position: relative;
  display: flex;
  width: 160px;
  height: 160px;
  border-radius: 80px;

  @media screen and (max-width: 700px) {
    width: 120px;
    height: 120px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 999px;
`;

const ProfileBtn = styled.label`
  position: absolute;
  border-radius: 20px;
  top: 110px;
  right: 5px;
  width: 40px;
  height: 40px;
  background-color: #ddd;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
  @media screen and (max-width: 700px) {
    width: 30px;
    height: 30px;
    top: 80px;
    right: 0px;
  }
`;

const Title = styled.p`
  font-size: 18px;
`;

const Desc = styled.input`
  padding-left: 5px;
  height: 36px;
  font-size: 12px;
  border: 2px solid #7594dd;
  border-radius: 5px;
  width: 300px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
  }
`;

const Uploadfile = styled.input`
  display: none;
`;

const SubmitBtn = styled.button`
  padding: 4px 5px;
  border-radius: 5px;
  border: none;
  border: 1px solid #7594dd;
  background-color: #c9d9f9;
  &:hover {
    background-color: #7594dd;
  }
`;
