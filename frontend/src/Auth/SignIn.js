import React from 'react';

export default function SignIn() {
  return (
    <div id='SignIn-modal'>
      <div className='input-field col s6'>
        <input id='UserName' type='text' className='validate' />
        <label for='UserName'>UserName</label>
      </div>
      <div className='input-field col s6'>
        <input id='password' type='password' className='validate' />
        <label for='password'>Password</label>
      </div>
      <button
        className='btn waves-effect waves-light col s6'
        type='submit'
        name='action'
      >
        Sign In
      </button>
    </div>
  );
}
