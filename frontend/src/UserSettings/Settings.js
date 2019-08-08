import React, { useState } from 'react';
import PropicUploader from './ImageUploader';
import ChangeUsername from './ChangeUsername';
import '../Styles/UserSettings/Settings.scss';
import '../App.css';

export default function Settings() {
  const [editStatus, setEditStatus] = useState(true);
  return (
    <div>
      <h2>Account Settings</h2>
      <div className='image-uploader'>
        <PropicUploader />
      </div>
      <ChangeUsername title='Username' defaultContent='raghav' />
      <ChangeUsername
        title='Bio'
        defaultContent='lorem ipsum so and so andos so long'
      />
      <ChangeUsername title='Email' defaultContent='raghav@gmail.com' />
      <ChangeUsername title='facebook link' defaultContent='ragh.kau.3' />
    </div>
  );
}
