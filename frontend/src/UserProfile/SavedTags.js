import React from 'react';

import '../Styles/SavedTags.scss';

const ArticleTags = [
  'blockchain',
  'ai',
  'crypto',
  'innovation',
  'science'
];

export default function SavedTag() {
  return (
    <div>
      <h1 className='saved-tags-title'>Saved Tags</h1>
      <div class='field is-grouped is-grouped-multiline'>
        {ArticleTags.map(item => {
          return (
            <div class='control'>
              <div class='tags has-addons'>
                <a class='tag is-link is-large is-rounded'>{item}</a>
                <a class='tag is-delete is-large is-rounded' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
