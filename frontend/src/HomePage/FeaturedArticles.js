import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/FeaturedArticle.scss';

export default function FeaturedArticles(props) {
  return (
    <div className='box'>
      <div className='featured-article'>
        {props.tags.map(item => {
          return <div className='tags-custom'>{item}</div>;
        })}
        <div className='featured-article-image'>
          <img src='https://images.pexels.com/photos/825258/pexels-photo-825258.jpeg?cs=srgb&dl=circuit-board-circuits-components-825258.jpg&fm=jpg' />
        </div>

        <div className='featured-article-content'>
          <Link to={`/article/${props.post_id}`}>
            <a>{props.title}</a>
          </Link>
          <h4>
            {props.author} | {props.post_time}
          </h4>
        </div>
      </div>
    </div>
  );
}
