import React from 'react';

export default function SignUp() {
  return (
    <div>
      <div class='field'>
        <label class='label'>UserName</label>
        <div class='control'>
          <input class='input is-rounded' type='text' placeholder='Username' />
        </div>
      </div>
      <div class='field'>
        <label class='label'>Email Address</label>
        <div class='control'>
          <input
            class='input is-rounded'
            type='email'
            placeholder='example@service.com'
          />
        </div>
      </div>
      <div class='field'>
        <label class='label'>Password</label>
        <div class='control'>
          <input
            class='input is-rounded'
            type='password'
            placeholder='Password'
          />
        </div>
      </div>
      <div class='field'>
        <label class='label'>Confirm Password</label>
        <div class='control'>
          <input
            class='input is-rounded'
            type='password'
            placeholder='COnfirm Password'
          />
        </div>
      </div>
      <a class='button is-info is-rounded'>Sign Up</a>
    </div>
  );
}
