import React from 'react';

import '../Styles/IssueCard.scss';

export default function IssueCard() {
  return (
    <div>
      <div class='container'>
        <img
          src='https://images.pexels.com/photos/2727736/pexels-photo-2727736.jpeg?cs=srgb&dl=beautiful-brunette-fashion-2727736.jpg&fm=jpg'
          class='image'
        />

        <div className='middle'>
          <h1>January 2018</h1>
          <br />
          <div className="bc-i">
          <a class='button'>
            See Issue
          </a>
          <a class='button'>
            Download
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
