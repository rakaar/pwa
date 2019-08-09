import React, { useState } from 'react';
import PropicUploader from './ImageUploader';
import EditComp from './EditComp';
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
      <EditComp title='Username' handleLogo='' defaultContent='raghav' />
      <EditComp
        title='Bio'
        handleLogo=''
        defaultContent='lorem ipsum so and so andos so long'
      />
      <EditComp title='Email' handleLogo='' defaultContent='raghav@gmail.com' />
      <EditComp
        title='Facebook Handle'
        handleLogo={fb}
        defaultContent='ragh.kau.3'
      />
      <EditComp
        title='Twitter Handle'
        handleLogo={twitter}
        defaultContent='ragh.kau.3'
      />
      <EditComp
        title='Medium Handle'
        handleLogo={medium}
        defaultContent='ragh.kau.3'
      />
      <EditComp
        title='Github Handle'
        handleLogo={github}
        defaultContent='ragh.kau.3'
      />
    </div>
  );
}
