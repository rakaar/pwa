import React from 'react';

import '../Styles/CustomCard.scss';

export default function CustomCard() {
  return (
    <div className='box'>
      <div className='top-article'>
        <div className='top-article-image'>
          <img src='https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80' />
        </div>
        <div className='top-article-meta'>
          <h3>The Rise of Bitcoins: Case Study </h3>
          
          <h4>
            From ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </h4>
        </div>
      </div>
    </div>
  );
}
