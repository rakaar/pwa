import React, { useState, Fragment } from 'react';

import '../Styles/UserSettings/EditComp.scss';

/*eslint-disable*/
export default function EditComp(props) {
  const [autoFocusVal, setAutoFocusVal] = useState(false);

  const [editedInfo, SetEditedInfo] = useState('');

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

  let inputTag = document.getElementsByTagName('input');

  const handleSave = () => {
    setAutoFocusVal(false);
  };

  const handleEdit = () => {
    setAutoFocusVal(true);
    moveCursorToEnd(inputTag[2]);
  };
  const handleInfoChange = e => {
    SetEditedInfo(e.target.value);
    props.onHandleChange(editedInfo);
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
    <Fragment>
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
            onChange={handleInfoChange}
          />
        </div>
      </div>
    </Fragment>
  );
}
