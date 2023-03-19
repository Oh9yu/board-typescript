import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav/Nav';
import Signin from './pages/Sign/Signin';
import Signup from './pages/Sign/Signup';
import SignContainer from './pages/Sign/SignContainer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<SignContainer />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
