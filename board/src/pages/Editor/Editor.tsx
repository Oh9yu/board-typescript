import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import getToken from '../../utils/getToken';
import { useLocation, useNavigate } from 'react-router-dom';
import { API } from '../../config/config';
import { useMutation } from '@tanstack/react-query';
import postFetch from '../../utils/dataFetch/postFetch';
import editFetch from '../../utils/dataFetch/editFetch';

const Editor = () => {
  const token = getToken('TOKEN') || '';
  const navigate = useNavigate();
  const location = useLocation();
  const quillRef = useRef<any>();
  const isEditMode = {
    title: location.state.title ? location.state.title : '',
    contents: location.state.contents ? location.state.contents : '',
    type: location.state.title ? 'Edit Post' : 'Posting',
  };
  const [title, setTitle] = useState(isEditMode.title);
  const [contents, setContents] = useState(isEditMode.contents);
  const catId = {
    mainCatId: location.state.mainCatId,
    subCatId: location.state.subCatId,
  };

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const contentsHandler = (value: string) => {
    setContents(value);
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline'],
          ['blockquote', 'code-block'],
          [{ header: 1 }, { header: 2 }],
          [{ color: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ['image'],
          ['clean'],
        ],
        handlers: {
          image: () => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();
            input.onchange = (e: any) => {
              const formData = new FormData();
              formData.append('file', e.target.files[0]);
              fetch(`${API.upload}`, {
                method: 'POST',
                body: formData,
              })
                .then(res => res.json())
                .then(data => {
                  const img = data.url;
                  setContents(
                    (prevContent: any) =>
                      `${prevContent}<img src=${img} alt='img' width=60%/>`
                  );
                });
            };
          },
        },
      },
    };
  }, []);

  const postMutaition = useMutation(() => {
    return postFetch(`${API.post}`, token, {
      mainCatId: catId.mainCatId,
      subCatId: catId.subCatId,
      title: title,
      contents: contents,
    });
  });

  const editMutation = useMutation(() => {
    return editFetch(`${API.post}`, token, {
      postId: location.state.postId,
      newTitle: title,
      newContents: contents,
    });
  });

  if (postMutaition.isSuccess) {
    alert('게시글이 등록되었습니다');
    navigate('/');
  }

  if (editMutation.isSuccess) {
    alert('수정되었습니다');
    navigate('/');
  }

  return (
    <Container>
      <Title>{isEditMode.type}</Title>
      <Section>
        <Input
          type="text"
          value={title}
          onChange={titleHandler}
          placeholder="제목을 입력하세요"
        />
        {isEditMode.title ? (
          <Button
            name="Edit"
            onClick={() => {
              editMutation.mutate();
            }}
          />
        ) : (
          <Button
            name="Submit"
            onClick={() => {
              postMutaition.mutate();
            }}
          />
        )}
      </Section>
      <StyledQuill
        modules={modules}
        value={contents}
        onChange={contentsHandler}
        ref={quillRef}
      />
    </Container>
  );
};

export default Editor;

const Container = styled.div`
  margin: auto;
  max-width: 1024px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  height: 50px;
  font-size: 24px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const Input = styled.input<{ theme: any }>`
  width: 200px;
  border: 2px solid ${props => props.theme.color3};
  margin-bottom: 10px;
  padding: 5px 10px;
  font-size: 16px;
`;

const StyledQuill = styled(ReactQuill)<{ theme: any }>`
  margin: auto;
  max-width: 1024px;
  height: 500px;

  .ql-toolbar {
    border: 1px solid ${props => props.theme.color3};
    padding: 10px;
  }
  .ql-editor {
    height: 100%;
    line-height: 1.5;
    overflow: scroll;
  }
`;
