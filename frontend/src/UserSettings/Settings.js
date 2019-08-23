import React, { useState, useEffect } from 'react';
import PropicUploader from './ImageUploader';
import EditComp from './EditComp';
import UserBio from './UserBio';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/UserSettings/Settings.scss';
import '../Styles/Snackbar.scss';
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
  const google = <i class='fa fa-google fa-2x' aria-hidden='false' />;

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

  // snackbar func
  const showSnackbar = () => {
    var x = document.getElementById('snackbar');
    x.className = 'show';
    setTimeout(function() {
      x.className = x.className.replace('show', '');
    }, 5000);
  };

  // when bio is changed
  const onBioChange = newbio => {
    const updatedUserInfo = Object.assign(userData, newbio);
    let res = connectBackend.postData(
      config.endpoints.user.postInfoUpdate,
      updatedUserInfo
    );
    if (res === 200) showSnackbar();
  };

  // when social media handles are changed
  const onFbHandleChange = newfb_handle => {
    const updatedUserInfo = Object.assign(userData, {
      fb_handle: newfb_handle
    });
    let res = connectBackend.postData(
      config.endpoints.user.postInfoUpdate,
      updatedUserInfo
    );
    if (res === 200) showSnackbar();
  };
  const onTwitterHandleChange = newTwitter_handle => {
    const updatedUserInfo = Object.assign(userData, {
      twitter_handle: newTwitter_handle
    });
    let res = connectBackend.postData(
      config.endpoints.user.postInfoUpdate,
      updatedUserInfo
    );
    if (res === 200) showSnackbar();
  };
  const onMediumHandleChange = newMedium_handle => {
    const updatedUserInfo = Object.assign(userData, {
      medium_handle: newMedium_handle
    });
    let res = connectBackend.postData(
      config.endpoints.user.postInfoUpdate,
      updatedUserInfo
    );
    if (res === 200) showSnackbar();
  };
  const onGoogleHandleChange = newg_handle => {
    const updatedUserInfo = Object.assign(userData, {
      g_handle: newg_handle
    });
    let res = connectBackend.postData(
      config.endpoints.user.postInfoUpdate,
      updatedUserInfo
    );
    if (res === 200) showSnackbar();
  };
  return (
    <div className='settings-page'>
      <h1>Account Settings</h1>
      <div id='snackbar'>Successfully details changed</div>
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

        <UserBio bio={userData.bio} onBioChange={onBioChange} />

        <div>
          <h2 className='social-settings-t'>Social media handles</h2>
          <EditComp
            title='Facebook Handle'
            handleLogo={fb}
            defaultContent={userData.fb_handle}
            canEdit={true}
            onHandleChange={onFbHandleChange}
          />
          <EditComp
            title='Twitter Handle'
            handleLogo={twitter}
            defaultContent={userData.twitter_handle}
            canEdit={true}
            onHandleChange={onTwitterHandleChange}
          />
          <EditComp
            title='Medium Handle'
            handleLogo={medium}
            defaultContent='ragh.kau.3'
            canEdit={true}
            onHandleChange={onMediumHandleChange}
          />
          <EditComp
            title='Google Handle'
            handleLogo={google}
            defaultContent={userData.g_handle}
            canEdit={true}
            onHandleChange={onGoogleHandleChange}
          />
        </div>
      </div>
    </div>
  );
}
