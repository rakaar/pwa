import React from 'react';

export default function Navbar() {
  return (
    <div>
      <ul id='dropdown1' className='dropdown-content'>
        <li>
          <a href='#!'>one</a>
        </li>
        <li>
          <a href='#!'>two</a>
        </li>
        <li className='divider' />
        <li>
          <a href='#!'>three</a>
        </li>
      </ul>
      <nav>
        <div className='nav-wrapper'>
          <a href='#!' className='brand-logo'>
            IIT Tech Ambit
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Tags</a>
            </li>
            <li>
              <a href='badges.html'>Issues</a>
            </li>

            <li>
              <a className='dropdown-trigger' href='#!' data-target='dropdown1'>
                <a className='modal-trigger' href='#modal'>
                  Sign In
                </a>
                <i className='material-icons right'>arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
