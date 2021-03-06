import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Messenger from './pages/messenger/Messenger';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';

const App = (props) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Routes>
      <Route path={'/'} element={user ? <Home /> : <Register />} />
      <Route
        path={'/login'}
        element={user ? <Navigate to={'/'} /> : <Login />}
      />
      <Route
        path={'/register'}
        element={user ? <Navigate to={'/'} /> : <Register />}
      />
      <Route
        path={'/messenger'}
        element={!user ? <Navigate to={'/'} /> : <Messenger />}
      />
      <Route path={'/profile/:username'} element={<Profile />} />
    </Routes>
  );
};

export default App;
