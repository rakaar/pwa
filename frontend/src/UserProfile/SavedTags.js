import React from 'react';

import '../Styles/SavedTags.scss';

export default function SavedTag(props) {
  return (
    <div>
      <h1 className='saved-tags-title'>Saved Tags</h1>
      <div class='field is-grouped is-grouped-multiline'>
        {props.tags.map(item => {
          return (
            <div class='control'>
              <div class='tags has-addons'>
                <a class='tag is-link is-large is-rounded'>{item}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
