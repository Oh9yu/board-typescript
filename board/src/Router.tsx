import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Signin from './pages/Sign/Signin';
import Signup from './pages/Sign/Signup';
import UserPage from './pages/UserPage/UserPage';
import AdminPage from './pages/AdminPage/AdminPage';
import PostListPage from './pages/PostListPage/PostListPage';
import PostPage from './pages/PostPage/PostPage';
import Editor from './pages/Editor/Editor';
import ResultPage from './pages/ResultPage/ResultPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/postlist" element={<PostListPage />} />
        {/* <Route path="/postpage" element={<PostPage />} /> */}
        <Route path="/result/:searchValue" element={<ResultPage />} />
        <Route path="/postpage/:id" element={<PostPage />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
