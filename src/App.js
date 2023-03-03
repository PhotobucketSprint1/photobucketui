import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import HomeImg from './components/HomeImg';

import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import CreatePost from './components/CreatePost';

function App() {

  return (
    <div>
      <Navigation />
    </div>
  );
}



export default App;
