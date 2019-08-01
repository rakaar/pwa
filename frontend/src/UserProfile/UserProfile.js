import React from 'react';
import '../Styles/UserProfile.scss';

export default function UserProfile() {
  return (
    <div className='profile'>
      <img
        className='user-image'
        src='https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
      />
      <h3>Raghavendra</h3>
      <h5>XYZ enthusiast, developer, advocate, doctor and engineer</h5>
    </div>
  );
}
