import React, { useState } from 'react';
import PropicUploader from './ImageUploader';
import ChangeUsername from './ChangeUsername';
import '../Styles/UserSettings/Settings.scss';
import '../App.css';

export default function Settings() {
  let fb = (
    <div>
      <i class='fa fa-facebook-square fa-1x' aria-hidden='false' />
      <h3>(facebook handle)</h3>
    </div>
  );

  let twitter = (
    <div>
      <i class='fa fa-twitter-square fa-1x' aria-hidden='false' />
      <h3>(twitter handle)</h3>
    </div>
  );
  let medium = (
    <div>
      <i class='fa fa-medium   fa-1x' aria-hidden='false' />
      <h3>(medium handle)</h3>
    </div>
  );
  let github = (
    <div>
      <i class='fa fa-github-square fa-1x' aria-hidden='false' />
      <h3>(github handle)</h3>
    </div>
  );
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
      <ChangeUsername title={fb} defaultContent='ragh.kau.3' />
      <ChangeUsername title={twitter} defaultContent='ragh.kau.3' />
      <ChangeUsername title={medium} defaultContent='ragh.kau.3' />
      <ChangeUsername title={github} defaultContent='ragh.kau.3' />
    </div>
  );
}
