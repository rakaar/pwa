import React from 'react';
import '../Styles/Issues.scss';

const IssueDates = [
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june',
  '3rd june'
];

export default function() {
  return (
    <div className='issues'>
      {IssueDates.map(item => {
        return (
          <div class='custom-container'>
            <img
              src='https://cdn.technologyreview.com/i/images/mj18-casey4_0.jpg?sw=2500&cx=0&cy=0&cw=1200&ch=1200'
              alt='Avatar'
              class='image'
            />
            <div class='overlay'>
              <div class='text'>{item}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
