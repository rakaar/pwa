import React from 'react';
import '../Styles/SavedArticle.scss';

/*eslint-disable*/
export default function SavedArticle(props) {
  return (
    <div className='saved-a-w'>
      <a className='saved-t'>{props.title}</a>
      <span className='saved-i'>by {props.author}</span>
    </div>
  );
}
