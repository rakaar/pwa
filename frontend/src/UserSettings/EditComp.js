import React, { useState, Fragment } from 'react';

import '../Styles/UserSettings/EditComp.scss';
import '../Styles/Snackbar.scss';

export default function EditComp(props) {
  const [autoFocusVal, setAutoFocusVal] = useState(false);

  const [backCol, SetBackCol] = useState('blue');
  const [textCol, SetTextCol] = useState('green');
  const [msg, SetMsg] = useState('random text');

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

  function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  let inputTag = document.getElementsByTagName('input');

  const handleSave = () => {
    let msgType = 'error';
    if (msgType === 'error') {
      SetMsg('error');
      SetBackCol('red');
      SetTextCol('white');
    } else if (msgType === 'warn') {
      SetMsg('warn');
      SetBackCol('yellow');
      SetTextCol('black');
    } else {
      SetMsg('Success');
      SetBackCol('green');
      SetTextCol('black');
    }
    sleep(3000).then(() => {
      // Do something after the sleep!
      var x = document.getElementById('snackbar');
      x.className = 'show';
      setTimeout(function() {
        x.className = x.className.replace('show', '');
      }, 3000);
    });
  };

  const handleEdit = () => {
    setAutoFocusVal(true);
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
    <Fragment>
      <div id='snackbar' style={{ backgroundColor: backCol, color: textCol }}>
        {msg}
      </div>
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
      </div>
    </Fragment>
  );
}
