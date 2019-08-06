import React, { useEffect } from 'react';

import '../Styles/UserDropdown.scss';

export default function UserDropDown() {
  useEffect(() => {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.classList.toggle('is-active');
    });
  });

  return (
    <div>
      <div class='dropdown'>
        <div class='dropdown-trigger'>
          <button
            class='button user-btn'
            aria-haspopup='true'
            aria-controls='dropdown-menu3'
          >

            <span>Raghav </span>
            <i class='fa fa-angle-double-down' aria-hidden='true' />
          </button>
        </div>
        <div class='dropdown-menu' id='dropdown-menu3' role='menu'>
          <div class='dropdown-content'>
            <a href='#' class='dropdown-item'>
              Profile
            </a>
            <hr class='dropdown-divider' />
            <a href='#' class='dropdown-item'>
              Settings
            </a>
            <hr class='dropdown-divider' />
            <a href='#' class='dropdown-item signout-alert'>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
