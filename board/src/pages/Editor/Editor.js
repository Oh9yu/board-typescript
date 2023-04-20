import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import getToken from '../../utils/getToken';
import { useLocation, useNavigate } from 'react-router-dom';
import { API } from '../../config/config';

const Editor = () => {
  const token = getToken();
  const navigate = useNavigate('');
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const catId = {
    mainCatId: location.state.mainCatId,
    subCatId: location.state.subCatId,
  };

  const toolbarModule = [
    ['bold', 'italic', 'underline'],
    ['blockquote', 'code-block'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['clean'],
  ];

  const titleHandler = e => {
    setTitle(e.target.value);
  };

  const contentsHandler = e => {
    setContents(e);
  };

  const submitHandler = () => {
    fetch(`${API.post}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        mainCatId: catId.mainCatId,
        subCatId: catId.subCatId,
        title: title,
        contents: contents,
      }),
    })
      .then(response => response.json())
      .then(res => alert(res.message));
    navigate('/');
  };

  console.log();

  return (
    <Container>
      <Title>Posting</Title>
      <Section>
        <Input
          type="text"
          value={title}
          onChange={titleHandler}
          placeholder="제목을 입력하세요"
        />
        <Button name="Submit" onClick={submitHandler} />
      </Section>
      <StyledQuill
        modules={{ toolbar: toolbarModule }}
        value={contents}
        onChange={contentsHandler}
      />
    </Container>
  );
};

export default Editor;

const Container = styled.div`
  margin: auto;
  width: 1024px;
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

const Input = styled.input`
  width: 200px;
  border: 2px solid #738cd3;
  margin-bottom: 10px;
  padding: 5px 10px;
  font-size: 16px;
`;

const StyledQuill = styled(ReactQuill)`
  margin: auto;
  width: 1024px;
  height: 500px;

  .ql-toolbar {
    border: 1px solid #738cd3;
    padding: 10px;
  }
  .ql-editor {
    height: 100%;
    line-height: 1.5;
    overflow: scroll;
  }
`;
