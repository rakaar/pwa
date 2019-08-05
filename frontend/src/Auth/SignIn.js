import React from 'react';

export default function SignIn() {
  return (
    <div>
      <div class='field'>
        <label class='label'>Username</label>
        <div class='control'>
          <input class='input' type='text' placeholder='' />
        </div>
      </div>
      <div class='field'>
        <label class='label'>Password</label>
        <div class='control'>
          <input class='input' type='text' placeholder='Text input' />
        </div>
      </div>
      <a class='button is-info is-rounded'>Sign In</a>
    </div>
  );
}
