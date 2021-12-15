import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Salir from './components/Salir';
import LoginN from './components/LoginN';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginN" element={<LoginN />} />
      <Route path="/salir" element={<Salir />} />
    </Routes>
  </BrowserRouter>
);

export default App;
