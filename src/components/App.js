import React from 'react';
import NavBar from './NavBar';
import MainBody from './MainBody';
import Footer from './Footer';
import Trainers from './Trainers';
import Join from './Join';
import Contact from './Contact';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [page, setPage] = useState('/');
  const [trainers, setTrainers] = useState([]);
  

  useEffect(() => {
    fetch('https://gymit-api.herokuapp.com/trainers')
      .then((response) => response.json())
      .then((data) => setTrainers(data));
  }, []);
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
            <Trainers trainers={trainers} />
          </Route>
          <Route path='/join'>
            <Join  />
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
