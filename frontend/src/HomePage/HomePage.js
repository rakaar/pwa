import React from 'react';
import CustomCarousel from './CustomCarousel';
import FeaturedArticle from './FeaturedArticles';
import RespNav from '../RespNavbar/RespNav';

export default function HomePage() {
  return (
    <div>
      <RespNav />
      <CustomCarousel />
      <FeaturedArticle />
      <FeaturedArticle />
      <FeaturedArticle />
    </div>
  );
}
