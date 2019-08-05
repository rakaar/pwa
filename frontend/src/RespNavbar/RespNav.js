import React from 'react';
import AuthModal from '../Auth/AuthModal';
import '../Styles/RespNav.scss';

export default function RespNav() {
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
    <div>
      <nav class='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <h2>IIT Tech Ambit</h2>

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
            <div className='navbar-item'>Tags</div>
            <div className='navbar-item'>Issues</div>
            <div className='navbar-item'>
              <AuthModal />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
