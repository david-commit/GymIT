import React from 'react';
import { useState } from 'react';

function Join() {
  const [linkedin, setLinkedin] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [twitter, setTwitter] = useState('');
  const [pintrest, setPintrest] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [facebook, setFacebook] = useState('');
  function handleSubmit(e) {
    const formData = {
      linkedin,
      name,
      title,
      twitter,
      pintrest,
      image,
      description,
      facebook
    };
    e.preventDefault();
    fetch('https://gymit-api.herokuapp.com/trainers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        setLinkedin('');
        setDescription('');
        setImage('');
        setName('');
        setPintrest('');
        setTitle('');
        setTwitter('');
        setFacebook("")
      });
  }
  return (
    <div className='join'>
      <h1>Registration Form</h1>
      <form className='joinform' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter full name eg John Doe'
          name='name'
          id='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type='text'
          placeholder='Enter title eg Assistant Trainer'
          name='title'
          id='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='url'
          placeholder='Facebook link'
          name='facebook'
          id='facebook'
          value={facebook}
          onChange={(event) => setFacebook(event.target.value)}
        />
        <input
          type='url'
          placeholder='Twitter link'
          name='twitter'
          id='twitter'
          value={twitter}
          onChange={(event) => setTwitter(event.target.value)}
        />
        <input
          type='url'
          placeholder='LinkedIn link'
          name='linkedin'
          id='linkedin'
          value={linkedin}
          onChange={(event) => setLinkedin(event.target.value)}
        />
        <input
          type='url'
          placeholder='Pintrest link'
          name='pintrest'
          id='pintrest'
          value={pintrest}
          onChange={(event) => setPintrest(event.target.value)}
        />
        <br />
        <label htmlFor='picture'>Image Link:</label>
        <input
          type='url'
          placeholder='Paste direct link'
          name='picture'
          id='picture'
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <em>
          <span id='instructions'>
            <strong>Instructions</strong>:
          </span>{' '}
          Go to <a href='https://postimages.org/'>PostImages </a>
          and upload your potrait picture. Copy the <strong>
            Direct Link
          </strong>{' '}
          and paste it above.
        </em>
        <br />
        <textarea
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder='Write an introduction message..'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <button type='submit'>
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default Join;
