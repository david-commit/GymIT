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
  const [newTrainer, setNewTrainer] = useState([]);

  useEffect(() => {
    fetch('https://gymit-api.herokuapp.com/trainers')
      .then((response) => response.json())
      .then((data) => setTrainers(data));
  }, []);
  console.log(page);

  function handleAddTrainer(addTrainer) {
    setNewTrainer([...trainers, addTrainer]);
  }
  console.log(newTrainer)

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/trainers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "name",
        title: "title",
        facebook: "facebook",
        linkedin: "linkedin",
        twitter: "twitter",
        pintrest: "pintrest",
        image: "image",
        description: "description",
      }),
    })
      .then((r) => r.json())
      .then((data) => handleAddTrainer(data));
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar onChangePage={setPage} />
        <Switch>
          <Route exact path='/GymIT/contact'>
            <Contact />
          </Route>
          <Route exact path='/GymIT/trainers'>
            <Trainers trainers={trainers} />
          </Route>
          <Route path='/GymIT/join'>
            <Join handleSubmit={handleSubmit} />
          </Route>
          <Route exact path='/GymIT'>
            <MainBody />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
