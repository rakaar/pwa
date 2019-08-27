import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';

import '../Styles/CustomCard.scss';

export default function CustomCard(props) {
  return (
    <div className='box'>
      <Link to={`/article/${props.post_id}`}>
        <div className='top-article'>
          <div className='top-article-image'>
            <img src={props.imgLinks[0]} />
          </div>
          <div className='top-article-meta'>
            <h3>{props.title}</h3>
            <h4>
              <Truncate lines={3} ellipsis={<span>...</span>}>
                {props.body}
              </Truncate>
            </h4>
            <a className='read-more-btn' href={`/article/${props.post_id}`}>
              {' '}
              Read More ➡
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
}
