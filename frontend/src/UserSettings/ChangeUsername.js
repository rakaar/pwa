import React, { useState, useEffect } from 'react';
import '../Styles/UserSettings/ChangeUsername.scss';

export default function ChangeUsername(props) {
  function moveCursorToEnd(el) {
    if (typeof el.selectionStart == 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != 'undefined') {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }
  }

  let inputTag = document.getElementsByTagName('input');

  const [autoFocusVal, setAutoFocusVal] = useState(false);

  const handleSave = () => {
    setAutoFocusVal(false);
  };

  const handleEdit = () => {
    setAutoFocusVal(true);
    console.log(inputTag[2]);
    moveCursorToEnd(inputTag[2]);
  };

  return (
    <div>
      <h1>
        <b>{props.title}</b>
      </h1>
      {autoFocusVal ? (
        <a className='button  is-success'>
          <b onClick={handleSave}>Save</b>
        </a>
      ) : (
        <a className='button is-outlined is-active'>
          <b onClick={handleEdit}>EDIT</b>
        </a>
      )}
      <input
        className='settings-input'
        type='text'
        defaultValue={props.defaultContent}
        readOnly={!autoFocusVal}
      />
    </div>
  );
}
