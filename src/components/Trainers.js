import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

function Trainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/trainers')
      .then((response) => response.json())
      .then((data) => setTrainers(data));
  }, []);
  console.log(trainers);

  const mappedTrainers = trainers.map((trainer) => {
    return (
      <div className='trainer-card' key={trainer.id}>
        <img src={trainer.image} alt='Trainer Image' />
        <div className='trainer-details'>
          <h3>{trainer.name}</h3>
          <p>{trainer.title}</p>
          <a href={trainer.facebook} class='fab fa-facebook-f'></a>
          <a href={trainer.twitter} class='fab fa-twitter'></a>
          <a href={trainer.linkedin} class='fab fa-linkedin'></a>
          <a href={trainer.pintrest} class='fab fa-pinterest'></a>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1 className='trainers-heading'>Meet the Team</h1>
      <div className='trainers'>{mappedTrainers}</div>
      <div className='join-us'>
        <Link to="/join" >
          <button type='button'>JOIN THE TEAM</button>
        </Link>
      </div>
    </>
  );
}

export default Trainers;
