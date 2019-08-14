import React, { useState, useEffect } from 'react';
import FlashMassage from 'react-flash-message';

import '../Styles/UserSettings/EditComp.scss';

export default function EditComp(props) {
  const [savedStatus, setSavedStatus] = useState(false);
  const [autoFocusVal, setAutoFocusVal] = useState(false);

  function moveCursorToEnd(el) {
    if (typeof el.selectionStart == 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != 'undefined') {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }

    document.getElementsByClassName('settings-input')[0].click();
  }

  const FlashMsg = (
    <FlashMassage duration={850} persistOnHover={false}>
      <p>Successfully Saved</p>
    </FlashMassage>
  );

  let inputTag = document.getElementsByTagName('input');
  console.log(inputTag);

  const handleSave = () => {
    setAutoFocusVal(false);
    setSavedStatus(true);
  };

  const handleEdit = () => {
    setAutoFocusVal(true);
    console.log(inputTag[2]);
    moveCursorToEnd(inputTag[2]);
  };

  const SaveAndEdit = autoFocusVal ? (
    <a className='button  is-success'>
      <b onClick={handleSave}>Save</b>
    </a>
  ) : (
    <a className='button is-outlined is-active'>
      <b onClick={handleEdit}>Edit</b>
    </a>
  );

  return (
    <div className='editcomp-w'>
      <h1>
        <b>{props.title}</b>
      </h1>

      {props.canEdit ? SaveAndEdit : ''}
      <div className='mobile-view-flex'>
        {props.handleLogo}
        <input
          className='settings-input'
          type='text'
          defaultValue={props.defaultContent}
          readOnly={!autoFocusVal}
        />
      </div>
      {savedStatus ? FlashMsg : ''}
    </div>
  );
}
