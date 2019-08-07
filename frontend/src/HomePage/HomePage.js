import React from 'react';
import CustomCarousel from './CustomCarousel';
import FeaturedArticle from './FeaturedArticles';
import RespNav from '../RespNavbar/RespNav';

import '../Styles/HomePage.scss';

export default function HomePage() {
  return (
    <div>
      <RespNav />
      <CustomCarousel />
      <div className='grid-v'>
        <div className='left-gw'>
          <FeaturedArticle />
          <FeaturedArticle />
          <FeaturedArticle />
        </div>
        <div className='right-gw'>
          <h2>This month's issue</h2>
        </div>
      </div>
    </div>
  );
}
