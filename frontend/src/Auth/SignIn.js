import React, { useState } from 'react';
import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';
import '../Styles/SignIn.scss';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    let data = {
      email,
      password
    };
    let res = await connectBackend.postData(config.endpoints.postLogin, data);
    console.log('res from signin ', res);

    if (res.message === 'Already Logged In') {
      // show a snackbar telling already logged In
    } else if (res.message === 'Please verify your email before first login') {
      // show a snackbar check mail
    } else if (res.message === 'email or password does not match.') {
      // show that do not match
    } else {
      // successfully login
    }
  };

  return (
    <div className='login-wrap'>
      <div className='signin-form'>
        <div class='field'>
          <label class='label'>Email</label>
          <div class='control'>
            <input
              class='input'
              type='text'
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div class='field'>
          <label class='label'>Password</label>
          <div class='control'>
            <input
              class='input'
              type='password'
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <a class='button is-info is-rounded btn-custom' onClick={handleSignIn}>
          Sign In
        </a>
      </div>
    </div>
  );
}
