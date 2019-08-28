import React, { useState, useEffect, Fragment } from 'react';
import AuthModal from '../Auth/AuthModal';
import CustomTagsButton from '../Tags/CustomTagsButton';
import UserDropdown from '../Auth/UserDropdown';
import { Link } from 'react-router-dom';
import '../Styles/RespNav.scss';

export default function RespNav(props) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  // const [usernameOnHome, setUsernameOnHome] = useState('');

  const showModal = () => {
    document.getElementById('id01').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
  };
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
    <Fragment>
      <div id='id01' class='w3-modal'>
        <div class='w3-modal-content w3-animate-top w3-card-4'>
          <header class='w3-container w3-black'>
            <span
              onClick={closeModal}
              className='w3-button w3-display-topright'
            >
              X
            </span>
            <h2>Support Us</h2>
          </header>
          <div class='w3-container'>
            <h2>Donate</h2>
            <h3>
              Donate will have a description, “For donations please reach out to
              us at abhijeet@vgsom.iitkgp.ac.in”
            </h3>
            <h2>Contribute</h2>
            <h3>
              Contribute will have the description, “Want us to cover your
              research? Have an article to contribute? Don’t think! Reach us now
              at connect@iit-techambit.in”
            </h3>
          </div>
        </div>
      </div>

      <div className='res-nav'>
        <nav class='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a href='/' style={{ color: 'black' }}>
              <h2>IIT Tech Ambit</h2>
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
              <div className='navbar-item'>
                <h5>WE ARE HIRING</h5>
              </div>
              <div className='navbar-item' onClick={showModal}>
                <h5> PUBLICISE RESEARCH</h5>
              </div>
              {/* <div className='navbar-item'> */}
              {/* <TagsModal /> */}
              {/* <CustomTagsButton /> */}
              {/* </div> */}
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
    </Fragment>
  );
}
