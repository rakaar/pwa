import React, { useState } from 'react';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/UserSettings/UserBio.scss';

export default function UserBio(props) {
  const [bioEditable, SetBioEditable] = useState(true);
  const [rowsText, SetRowsText] = useState(2);
  const [savedStatus, setSavedStatus] = useState(false);

  const [editedBio, SetEditedBio] = useState('');

  const handleEdit = () => SetBioEditable(false);

  const handleSave = () => {
    SetBioEditable(true);
    setSavedStatus(true);
    // need user's currentData for that
    // either use sessions
    // use redux or some state management
  };

  window.onload = () => {
    if (window.screen.width < 768) SetRowsText(6);
  };

  return (
    <div>
      <h1 className='bio-title'>
        <b>Bio</b>
      </h1>
      <textarea
        disabled={bioEditable}
        cols='50'
        rows={rowsText}
        onChange={e => SetEditedBio(e.target.value)}
      >
        {props.bio}
      </textarea>
      {!bioEditable ? (
        <a className='button  is-success'>
          <b onClick={handleSave}>Save</b>
        </a>
      ) : (
        <a className='button is-outlined is-active'>
          <b onClick={handleEdit}>Edit</b>
        </a>
      )}
    </div>
  );
}
