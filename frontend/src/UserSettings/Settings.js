import React, { useState } from 'react';
import PropicUploader from './ImageUploader';
import EditComp from './EditComp';
import UserBio from './UserBio';
import '../Styles/UserSettings/Settings.scss';
import '../App.css';

export default function Settings() {
  let fb = <i class='fa fa-facebook-square fa-2x' aria-hidden='false' />;
  let twitter = <i class='fa fa-twitter-square fa-2x' aria-hidden='false' />;
  let medium = <i class='fa fa-medium fa-2x' aria-hidden='false' />;
  let github = <i class='fa fa-github-square fa-2x' aria-hidden='false' />;

  const [editStatus, setEditStatus] = useState(true);

  return (
    <div className='settings-page'>
      <h1>Account Settings</h1>
      <div className='image-uploader'>
        <PropicUploader />
      </div>

      <div className='grid-v-s'>
        <EditComp
          title='Username'
          handleLogo=''
          defaultContent='raghav'
          canEdit={false}
        />
        <UserBio />
        <EditComp
          title='Email'
          handleLogo=''
          defaultContent='raghav@gmail.com'
          canEdit={false}
        />
        <div>
          <h2 className='social-settings-t'>Social </h2>
          <EditComp
            title='Facebook Handle'
            handleLogo={fb}
            defaultContent='ragh.kau.3'
            canEdit={true}
          />
          <EditComp
            title='Twitter Handle'
            handleLogo={twitter}
            defaultContent='ragh.kau.3'
            canEdit={true}
          />
          <EditComp
            title='Medium Handle'
            handleLogo={medium}
            defaultContent='ragh.kau.3'
            canEdit={true}
          />
          <EditComp
            title='Github Handle'
            handleLogo={github}
            defaultContent='ragh.kau.3'
            canEdit={true}
          />
        </div>
      </div>
    </div>
  );
}
