import React from 'react';
import '../Styles/UserProfile.scss';

export default function UserProfile() {
  return (
    <div className='profile'>
      <img
        className='user-image'
        src='https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
      />
      <h2>Raghavendra</h2>
      <h3>XYZ enthusiast, developer, advocate, doctor and engineer</h3>
      <div className='icons'>
        <i class='fa fa-facebook-square fa-3x' aria-hidden='false' />
        <i class='fa fa-twitter-square fa-3x' aria-hidden='false' />
        <i class='fa fa-linkedin-square fa-3x' aria-hidden='false' />
        <i class='fa fa-medium fa-3x' aria-hidden='false' />
        <i class='fa fa-github-square fa-3x' aria-hidden='false' />
      </div>
    </div>
  );
}
