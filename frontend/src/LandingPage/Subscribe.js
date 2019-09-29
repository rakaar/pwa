import React from 'react';
import '../Styles/LandingPage/Subscribe.scss';

export default function Subscribe() {
  return (
    <div>
      <div className='sub'>
        <h1 className='sub-txt'>Subscribe</h1>
        <input
          className='input is-rounded is-info is-large column is-two-fifths'
          type='email'
          placeholder='Enter email'
        />
        <div class='field'>
          <p class='control'>
            <button class='button is-rounded is-primary'>Try It</button>
          </p>
        </div>
      </div>
    </div>
  );
}
