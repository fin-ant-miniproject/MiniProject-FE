import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import './styles/reset.css';

import Header from './components/header';
import Navigation from './components/navigation';
import Index from './components/index';
import Favorite from './components/favorite';
import Cart from './components/cart';
import Mypage from './components/myPage';
import Login from './components/login';

export default function App() {
  return (
    <Router className="App">
      <Header />

      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/myPage' element={<Mypage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
      <Navigation />
    </Router>
  );
}
