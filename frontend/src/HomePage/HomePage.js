import React from 'react';
import CustomCarousel from './CustomCarousel';
import FeaturedArticle from './FeaturedArticles';
import RespNav from '../RespNavbar/RespNav';

export default function HomePage() {
  return (
    <div>
      <RespNav />
      <CustomCarousel />
      <div className="grid-v">
        <div className="left-gw">
          <FeaturedArticle />
          <FeaturedArticle />
          <FeaturedArticle />
        </div>
        <div className="right-gw">
          <h2>Sidebar</h2>
        </div>
      </div>
      <style jsx>
      {`
      .grid-v{
        display:grid;
        grid-template-columns: 2fr 1fr;
        background: transparent;
      }
      `}
      </style>
    </div>
  );
}
