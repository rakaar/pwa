import React, { useState } from 'react';
import PropicUploader from './ImageUploader';
import ChangeUsername from './ChangeUsername';
import '../Styles/UserSettings/Settings.scss';
import '../App.css';

export default function Settings() {
  let fb = <i class='fa fa-facebook-square fa-2x' aria-hidden='false' />;
  let twitter = <i class='fa fa-twitter-square fa-2x' aria-hidden='false' />;
  let medium = <i class='fa fa-medium fa-2x' aria-hidden='false' />;
  let github = <i class='fa fa-github-square fa-2x' aria-hidden='false' />;
  const [editStatus, setEditStatus] = useState(true);
  return (
    <div>
      <h1>Account Settings</h1>
      <div className='image-uploader'>
        <PropicUploader />
      </div>
      <ChangeUsername title='Username' handleLogo='' defaultContent='raghav' />
      <ChangeUsername
        title='Bio'
        handleLogo=''
        defaultContent='lorem ipsum so and so andos so long'
      />
      <ChangeUsername
        title='Email'
        handleLogo=''
        defaultContent='raghav@gmail.com'
      />
      <ChangeUsername
        title='Facebook Handle'
        handleLogo={fb}
        defaultContent='ragh.kau.3'
      />
      <ChangeUsername
        title='Twitter Handle'
        handleLogo={twitter}
        defaultContent='ragh.kau.3'
      />
      <ChangeUsername
        title='Medium Handle'
        handleLogo={medium}
        defaultContent='ragh.kau.3'
      />
      <ChangeUsername
        title='Github Handle'
        handleLogo={github}
        defaultContent='ragh.kau.3'
      />
    </div>
  );
}
