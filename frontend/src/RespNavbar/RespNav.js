import React, { useState, useEffect } from 'react';
import AuthModal from '../Auth/AuthModal';
import CustomTagsButton from '../Tags/CustomTagsButton';
import UserDropdown from '../Auth/UserDropdown';
import { Link } from 'react-router-dom';
import '../Styles/RespNav.scss';

export default function RespNav(props) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  // const [usernameOnHome, setUsernameOnHome] = useState('');

  useEffect(() => {
    // if (localStorage.getItem('loginToken') != null) setUserLoggedIn(true);
    console.log(localStorage.getItem('loginToken'), 'heree');
    if (localStorage.getItem('loginToken') != null) setUserLoggedIn(true);
  });

  // setUsernameOnHome(localStorage.getItem('username'));
  const onLogout = () => setUserLoggedIn(false);
  document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });

  return (
    <div className='res-nav'>
      <nav class='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a href='/' style={{ color: 'black' }}>
            <h3>IIT Tech Ambit</h3>
          </a>

          <a
            role='button'
            class='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='navbarBasicExample' class='navbar-menu'>
          <div className='navbar-end'>
            {/* <div className='navbar-item'>
              { <TagsModal /> }
              <CustomTagsButton />
            </div> */}
            <div className='navbar-item'>
              <h5 className='issues-btn'>
                <Link to='/issues'>ISSUES</Link>
              </h5>
            </div>
            {/* <div className='navbar-item'>
              {userLoggedIn ? (
                <UserDropdown
                  username={localStorage.getItem('username')}
                  onLogout={onLogout}
                />
              ) : (
                <AuthModal />
              )}
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
