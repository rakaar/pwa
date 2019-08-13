import React from 'react';
import CustomCarousel from './CustomCarousel';
import FeaturedArticle from './FeaturedArticles';
import MonthlyIssue from './MonthlyIssue';
import '../Styles/HomePage.scss';

export default function HomePage() {
  return (
    <div>
      <CustomCarousel />
      <div className='grid-v'>
        <div className='left-gw'>
          <span className='section-title'>Popular Posts ✨</span>
          <FeaturedArticle />
          <FeaturedArticle />
          <FeaturedArticle />
        </div>
        <div className='right-gw'>
          <MonthlyIssue />
        </div>
      </div>
    </div>
  );
}
