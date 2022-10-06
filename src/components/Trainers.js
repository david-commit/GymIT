import React from 'react';
import { useEffect, useState } from 'react';

function Trainers() {
  const [trainers, setTrainers] = useState([]);

  
  return (
    <>
      <h1 className='trainers-heading'>Meet the Team</h1>
      <div className='trainers'>{mappedTrainers}</div>
      <div className='join-us'>
        <button type='button'>JOIN THE TEAM</button>
      </div>
    </>
  );
}

export default Trainers;
