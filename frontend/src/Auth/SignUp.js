import React from 'react';

export default function SignUp() {
  return (
    <div>
      <div className='input-field col s6'>
        <input id='UserName' type='text' className='validate' />
        <label for='UserName'>UserName</label>
      </div>
      <div className='input-field col s6'>
        <input id='mail' type='text' className='validate' />
        <label for='mail'>Mail</label>
      </div>
      <div className='input-field col s6'>
        <input id='password' type='password' className='validate' />
        <label for='password'>Password</label>
      </div>
      <div className='input-field col s6'>
        <input id='confirm-password' type='password' className='validate' />
        <label for='confirm-password'>Confirm Password</label>
      </div>
      <button
        className='btn waves-effect waves-light col s6'
        type='submit'
        name='action'
      >
        Sign Up
      </button>
    </div>
  );
}
