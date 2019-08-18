import React, { useEffect } from 'react';
import FeaturedArticles from '../HomePage/FeaturedArticles';

import '../Styles/ArticlesByTag.scss';

const tags = [
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag'
];

export default function ArticlesByTag(props) {
  useEffect(() => {
    console.log(sessionStorage.getItem('taglist'));
  });

  return (
    <div>
      <h1>Articles as per Your Selected Tags</h1>
      <div className='tags-abt'>
        {tags.map(item => (
          <span class='tag is-black is-large is-rounded'>{item}</span>
        ))}
      </div>
      <FeaturedArticles />
      <FeaturedArticles />
      <FeaturedArticles />
      <FeaturedArticles />
      <FeaturedArticles />
      <FeaturedArticles />
      <FeaturedArticles />
    </div>
  );
}
