import React from 'react';
import NavBar from './NavBar';
import MainBody from './MainBody';
import Footer from './Footer';
import Trainers from './Trainers';
import Join from './Join';
import Contact from './Contact';
import { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [page, setPage] = useState('/');
  console.log(page);
  return (
    <div>
     
    </div>
  );
}

export default App;
