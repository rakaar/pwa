import React from 'react';

import '../Styles/FeaturedArticle.scss';

export default function FeaturedArticles() {
  return (
    <div className='box'>
      <div className='featured-article'>
        <div className='featured-article-content'>
          <h3>Title of the article</h3>
          <h4>
            ext ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </h4>
        </div>
        <div className='featured-article-image'>
          <img src='https://homepages.cae.wisc.edu/~ece533/images/cat.png' />
        </div>
      </div>
    </div>
  );
}
