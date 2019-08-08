import React, { useState } from 'react';

import '../Styles/Settings.scss';
import '../App.css';

export default function Settings() {
  const [editStatus, setEditStatus] = useState(true);
  return (
    <div>
      <h2>Account Settings</h2>
      <div className='settings-item'>
        <div className='settings-title'>
          <h3>
            <b>Username</b>
          </h3>
        </div>
        <div className='settings-value'>
          <h4 contentEditable={editStatus}>raghavendra kaushik</h4>
        </div>
        <div className='edit-btn' onClick={() => setEditStatus(!editStatus)}>
          {editStatus ? <p>save</p> : <p>edit</p>}
        </div>
      </div>
    </div>
  );
}
