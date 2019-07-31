import React from 'react';
import { Carousel } from 'react-materialize';
import TopArticle from './ArticleCarousel';

export default function ArticlesCarousel() {
  return (
    <div>
      <Carousel options={{ indicators: true }}>
        <div>
          <TopArticle />
        </div>
        <div>
          <TopArticle />
        </div>
        <div>
          <p>hey</p>
        </div>
      </Carousel>
    </div>
  );
}
