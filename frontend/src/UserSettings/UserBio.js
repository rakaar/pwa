import React, { useState } from 'react';

import '../Styles/UserSettings/UserBio.scss';

export default function UserBio() {
  const [bioEditable, SetBioEditable] = useState(true);
  const [rowsText, SetRowsText] = useState(2);
  const [savedStatus, setSavedStatus] = useState(false);

  const handleEdit = () => SetBioEditable(false);

  const handleSave = () => {
    SetBioEditable(true);
    setSavedStatus(true);
  };

  window.onload = () => {
    if (window.screen.width < 768) SetRowsText(6);
  };

  return (
    <div>
      <h1 className='bio-title'>
        <b>Bio</b>
      </h1>
      <textarea disabled={bioEditable} cols='50' rows={rowsText}>
        At w3schools.com you will learn how to make a website. We offer free
        tutorials in all web development technologies.
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
