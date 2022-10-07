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
  // const [newTrainer, setNewTrainer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/trainers')
      .then((response) => response.json())
      .then((data) => setTrainers(data));
  }, []);
  console.log(page);

  // function handleAddTrainer(addTrainer) {
  //   setNewTrainer([...trainers, addTrainer]);
  // }
  // console.log(newTrainer)

  function handleSubmit(e) {
    e.preventDefault();
    // const personalData = {
    //   name: name,
    //   title: title,
    //   facebook: facebook,
    //   linkedin: linkedin,
    //   twitter: twitter,
    //   pintrest: pintrest,
    //   image: image,
    //   description: description,
    // };
    // fetch('http://localhost:3000/trainers', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(personalData),
    // })
    //   .then((r) => r.json())
    //   .then((data) => handleAddTrainer(data));
  }

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
            <Join handleSubmit={handleSubmit} />
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
