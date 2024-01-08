import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Register from '../../pages/register-page/Register';
import Login from '../../pages/login-page/Login';
import Main from '../../pages/main-page/Main';
import Favorites from '../../pages/favorites-page/Favorites';
import StandItem from '../../pages/stand-page/StandItem';
import Search from '../../pages/search-page/Search';

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const log = localStorage.getItem('isLoggedIn') === 'true';
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(log);
    setUser(storedUser);
  }, []);

  const handleSignIn = (userData) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} user={user} onSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login onSignIn={handleSignIn} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/stands/:id" element={<StandItem />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
