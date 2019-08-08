import React, { useEffect } from 'react';

import '../Styles/UserDropdown.scss';

export default function UserDropdown() {
  var demoId;

  useEffect(() => {
    demoId = document.getElementById('demo');

    window.addEventListener('click', event => {
      if (event.target.tagName !== 'H5') {
        demoId.className = demoId.className.replace(' w3-show', '');
      }
    });
  }, []);

  const handleDropdown = () => {
    if (demoId.className.indexOf('w3-show') == -1) {
      demoId.className += ' w3-show';
    } else {
      demoId.className = demoId.className.replace(' w3-show', '');
    }
  };

  return (
    <div>
      <div className='w3-dropdown-click'>
        <h5 onClick={handleDropdown}>Raghavendra</h5>
        <div
          id='demo'
          className='w3-dropdown-content w3-bar-block w3-card-4 w3-animate-zoom'
        >
          <h6 className='w3-bar-item w3-button'>Profile</h6>
          <h6 className='w3-bar-item w3-button'>Settings</h6>
          <h6 className='w3-bar-item w3-button'>LogOut</h6>
        </div>
      </div>
    </div>
  );
}
