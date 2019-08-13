import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/FeaturedArticle.scss';

export default function FeaturedArticles() {
  return (
    <div className='box'>
      <div className='featured-article'>
        <div className='tags-custom'>BLOCKCHAIN</div>
        <div className='featured-article-image'>
          <img src='https://images.pexels.com/photos/825258/pexels-photo-825258.jpeg?cs=srgb&dl=circuit-board-circuits-components-825258.jpg&fm=jpg' />
        </div>

        <div className='featured-article-content'>
          <Link to='/article/1'>
            <a>Innovation: A walkthrough inventing your own solution</a>
          </Link>
          <h4>Ajay Yadav | Jul 28, 2019</h4>
        </div>
      </div>
    </div>
  );
}
