import React, { useState, useEffect } from 'react';
import SavedArticle from './SavedArticle';
import SavedTags from './SavedTags';
import axios from 'axios';

import '../Styles/UserProfile.scss';

// useEffect(() => {
//   axios
//     .get('http://localhost:4000/user/1')
//     .then(res => {})
//     .catch(err => console.log(err));

//   axios.get('http://localhost:4000/followedTags');
// });

export default function UserProfile() {
  const [username, setUsername] = useState('');
  const [fbHandle, SetfbHandle] = useState('');
  const [twitterHandle, SetTwitterHandle] = useState('');
  const [mediumHandle, SetMediumHandle] = useState('');
  const [GHandle, SetGHandle] = useState('');
  const [LinkedInHandle, SetLinkedInHandle] = useState('');
  // image will be s orted later
  const [bio, SetBio] = useState('');
  // tags in hold

  return (
    <div>
      <div className='profile'>
        <div className='name-sec'>
          <img
            className='user-image'
            src='https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
          />
          <div className='name-r'>
            <h2 className='username'>John Doe</h2>
            {/* <a href='#' className='edit-profile'>
              Edit
            </a> */}
            <br />
            <h3>Web Developer, Designer, Machine Learning Enthusiast </h3>

            <div className='icons'>
              <i class='fa fa-facebook-square fa-3x' aria-hidden='false' />
              <i class='fa fa-twitter-square fa-3x' aria-hidden='false' />
              <i class='fa fa-linkedin-square fa-3x' aria-hidden='false' />
              <i class='fa fa-medium fa-3x' aria-hidden='false' />
              <i class='fa fa-github-square fa-3x' aria-hidden='false' />
            </div>
          </div>
        </div>
      </div>
      <div className='saved-tags'>
        <SavedTags />
      </div>
      <div className='saved-cards-w'>
        <h2> Saved Articles </h2>
        <div className='saved-cards-g'>
          <SavedArticle />
          <SavedArticle />
          <SavedArticle />
          <SavedArticle />
        </div>
      </div>
    </div>
  );
}
