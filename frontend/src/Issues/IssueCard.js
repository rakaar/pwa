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
        <div class='middle'>
          <h1>January 2018</h1>
          <a class='button is-medium is-one-fifths is-outlined is-active'>
            See Issue
          </a>
          <a class='button is-medium is-one-fifths is-outlined is-active'>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
