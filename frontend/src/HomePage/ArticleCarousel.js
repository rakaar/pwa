import React from 'react';
import { Row, Col, Card } from 'react-materialize';

export default function TopArticles() {
  return (
    <div>
      <div className='card horizontal'>
        <div className='card-image'>
          <img src='https://materializecss.com/images/sample-1.jpg' />
        </div>
        <div className='card-stacked'>
          <div className='card-content'>
            <h5>Title of the Article</h5>
            <p>Conent of the article</p>
          </div>
        </div>
      </div>
    </div>
  );
}
