import React from 'react';
import '../Styles/CustomCard.scss';

export default function CustomCard() {
  return (
    <div className='card-in-homepage'>
      <div className='card'>
        <img
          className='article-image'
          src='https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
        />
        <div className='container'>
          <h4>Title of the article</h4>
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </h5>
        </div>
      </div>
    </div>
  );
}
