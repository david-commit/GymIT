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
      <BrowserRouter>
        <NavBar onChangePage={setPage} />
        <Switch>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/trainers'>
            <Trainers />
          </Route>
          <Route exact path='/join'>
            <Join />
          </Route>
          <Route exact path='/'>
            <MainBody />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
