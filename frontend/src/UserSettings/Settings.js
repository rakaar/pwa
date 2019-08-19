import React, { useState, useEffect } from 'react';
import PropicUploader from './ImageUploader';
import EditComp from './EditComp';
import UserBio from './UserBio';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/UserSettings/Settings.scss';
import '../App.css';

export default function Settings() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    fb_handle: '',
    g_handle: '',
    medium_handle: '',
    twitter_handle: '',
    linkedin_handle: '',
    bio: ''
  });
  const [changePass, setChangePass] = useState(false);

  const fb = <i class='fa fa-facebook-square fa-2x' aria-hidden='false' />;
  const twitter = <i class='fa fa-twitter-square fa-2x' aria-hidden='false' />;
  const medium = <i class='fa fa-medium fa-2x' aria-hidden='false' />;
  const github = <i class='fa fa-github-square fa-2x' aria-hidden='false' />;

  useEffect(() => {
    let id = 1; // id we get from user login
    let userRes = connectBackend.getData(config.endpoints.user.getUser, { id });
    setUserData({
      username: userRes.data.username,
      email: userRes.data.email,
      fb_handle: userRes.data.fb_handle,
      g_handle: userRes.data.g_handle,
      medium_handle: userRes.data.medium_handle,
      twitter_handle: userRes.data.twitter_handle,
      linkedin_handle: userRes.data.linkedin_handle,
      bio: userRes.data.bio
    });
  });

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
          defaultContent={userData.username}
          canEdit={false}
        />
        <EditComp
          title='Email'
          handleLogo=''
          defaultContent={userData.email}
          canEdit={false}
        />

        <div className='cps-w'>
          {' '}
          <h3>Password </h3>
          <a className='cp-l' onClick={setChangePass}>
            Change Password
          </a>
          {changePass ? (
            <div className='cpf-w'>
              <input
                className='cpi'
                type='password'
                placeholder='Old Password'
              />
              <input
                className='cpi'
                type='password'
                placeholder='New Password'
              />
              <input
                className='cpi'
                type='password'
                placeholder='Confirm New Password'
              />
              <a className='cp-a'> Change Password </a>
            </div>
          ) : (
            <> </>
          )}
        </div>

        <UserBio bio={userData.bio} />

        <div>
          <h2 className='social-settings-t'>Social media handles</h2>
          <EditComp
            title='Facebook Handle'
            handleLogo={fb}
            defaultContent={userData.fb_handle}
            canEdit={true}
          />
          <EditComp
            title='Twitter Handle'
            handleLogo={twitter}
            defaultContent={userData.twitter_handle}
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
            defaultContent={userData.g_handle}
            canEdit={true}
          />
        </div>
      </div>
    </div>
  );
}
