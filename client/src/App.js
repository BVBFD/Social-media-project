import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';

const App = (props) => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/profile/:username'} element={<Profile />} />
    </Routes>
  );
};

export default App;
