import React from 'react';
import '../Styles/SignIn.scss'

export default function SignIn() {
  return (
    <div className="login-wrap" >
      
    
    <div className="signin-form">
        <div class='field'>
            <label class='label'>Username</label>
            <div class='control'>
            <input class='input' type='text' placeholder='Username' />
            </div>
        </div>
        <div class='field'>
            <label class='label'>Password</label>
            <div class='control'>
            <input class='input' type='text' placeholder='Password' />
            </div>
        </div>
        <a class='button is-info is-rounded btn-custom'>Sign In</a>
    </div>

    </div>
  );
}
